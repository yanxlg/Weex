/**
 * Created by yxl79 on 2017/4/7.
 * 配置化host,使用原生传递过来的host进行
 */
let appConfig={
    pageSize:20,
    debug:true,//debug模式，每个界面都有测试数据，确保会有数据显示
    _host:"",
    get host(){
        return this._host||"http://103.242.169.60:40080/";
    },
    set host(/*String*/hostPrefix){
        this._host=hostPrefix;
    },
    // host:"http://10.40.5.58:5001/",
    // host:"http://localhost:5001/",
    get h5_host(){
        return this._host||"https://api.5ishang.com";
    }
};
export {appConfig};