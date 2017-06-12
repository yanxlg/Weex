/**
 * Created by yxl79 on 2017/4/8.
 * 对于api的封装
 */
import {appConfig} from "./../config/weexConfig";
let navigator=weex.requireModule("navigator");
let modal=weex.requireModule("modal");
let stream=weex.requireModule("stream");
let loadingModule=weex.requireModule("loadingModule");
let titleBar=weex.requireModule("titleBarModule");
let globalEvent = weex.requireModule('globalEvent');
let toastModule=weex.requireModule("toastModule");
let storage = weex.requireModule('storage');
let share= weex.requireModule('shareModule');
let refresh=weex.requireModule('refreshModule');
let nav=weex.requireModule("navigatorModule");
let api={
    startActivity:function (bundleUrl,/*Object*/params) {
        //使用json来传递，如果参数名为jsonData则原生使用json来解析
        let url=bundleUrl;
        let paramStr=this.serialize(params,true);
        if(paramStr){
            url+="?"+paramStr;
        }
        navigator.push({
            url:url,
            animated:"true"
        })
    },
    closeActivity:function () {
        navigator.pop({
            animated:"true"
        })
    },
    openController:function (type,data) {
        nav&&nav.open(type,data);
    },
    serialize(/*Object*/ json,/*boolean*/encode){
        if(arguments.length===1){
            encode=false;
        }
        if(json){
            let paramArray=[];
            for(let key in json){
                let val=json[key];
                let value=encode?encodeURIComponent(val):encodeURI(val);
                paramArray.push(key+"="+(val?(value):""));
            }
            return paramArray.join("&");
        }else{
            return "";
        }
    },
    encodeUTF8:function (str) {
        let temp = "",rs = "";
        for( let i=0 , len = str.length; i < len; i++ ){
            temp = str.charCodeAt(i).toString(16);
            rs  += "\\u"+ new Array(5-temp.length).join("0") + temp;
        }
        return rs;
    },
    ajax:function (/*String*/type,/*String*/url,/*Object*/params,/*Function*/callback) {
        //默认添加请求头,web中body传递参数，支持对象，weex中get需要在url传递，post可以在body中传递，具体的需要参考
        let headers={
            secret:"af2ab55f5cfe4c269a7b726e7f3fdef9"
        };
        if(type.toLowerCase()==="post"){
            headers["Content-Type"]="application/json";
        }
        if(type.toLowerCase()==="get"){
            url=appConfig.host+url+(params?("?"+this.serialize(params)):"");
        }else{
            url=appConfig.host+url;
            params=JSON.stringify(params);
        }
        //IOS get不能传递body
        let fetchObj={
            method:type.toUpperCase(),
            type: 'json',
            headers:headers,
            url:url,
            timeout:100000
        };
        if(type.toLowerCase()==="post"){
            fetchObj.body=params;
        }
        stream.fetch(fetchObj, res=>{
            if(res.ok){
                if(res.data.Head.Ret == 0){
                    callback(res);
                }else{
                    api.alert(res.data.Head.Msg,()=>{
                        api.closeActivity();
                    })
                }
            }else{
                api.alert(res.statusText,()=>{
                    api.closeActivity();
                })
            }
        })
    },
    showWaiting:function () {
        loadingModule&&loadingModule.showLoading();
    },
    closeWaiting:function () {
        loadingModule&&loadingModule.dismissLoading();
    },
    toast:function (/*String*/msg) {
        modal.toast({
            message:msg,
            duration:1
        })
    },
    alert(/*String*/msg,/*Function*/ callback){
        modal.alert({
            message:msg
        },()=>{
            callback&&callback();
        })
    },
    setTitle:function (/*String*/title) {
        titleBar&&titleBar.setTitle(title);
    },
    setTitleIcon:function (/*String*/ icon) {
        titleBar&&titleBar.setTitleIcon(icon);
    },
    setRightAction:function (/*Object*/action) {
        titleBar&&titleBar.setRightAction&&titleBar.setRightAction(action);
    },
    setSecondaryRightAction:function (/*Object*/ action) {
        titleBar&&titleBar.setSecondaryRightAction(action);
    },
    addEventListener:function(/*String*/eventName,/*Function*/callback){
        globalEvent&&globalEvent.addEventListener(eventName,callback);
    },
    removeEventListener:function (/*String*/eventName) {
        globalEvent&&globalEvent.removeEventListener(eventName);
    },
    toastView:function (/*String*/ title, /*String*/ secondaryTitle, /*String*/ icon) {
        toastModule&&toastModule.toastByNativeView(title,secondaryTitle,icon);
    },
    store:function (/*String*/key,/*String*/val) {
        storage.setItem(key, val);
    },
    removeStore:function (/*String*/key) {
        storage.removeItem(key);
    },
    getStore:function (/*String*/key,/*Function*/ callback) {
        storage.getItem(key, event => {
            callback(event.data);
        })
    },
    openShare:function (/*String*/title,/*String*/ detailId,/*String*/type,/*String*/shareLink,/*String*/imageUrl,/*String*/content,/*String*/icon) {
        share&&share.openShareUI({
            title:title,
            detailId:detailId,
            type:type,
            shareLink:shareLink,
            imageUrl:imageUrl,
            content:content,
            icon:icon
        })
    },
    setRefreshEnable:function (/*String*/ref,/*boolean*/enable) {
        refresh&&(function () {
            refresh.setEnable(ref,enable);
        }())
    },
    setRefreshState:function (/*String*/ref, /*boolean*/refreshing) {
        refresh&&(function () {
            refresh.setRefresh(ref,refreshing);
        }())
    }
};
export {api,appConfig};
