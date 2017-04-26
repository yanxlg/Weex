
# Weex接入规范  <font style="color:#FF69B4;font-size:12px;">build :v 0.1</font>

#### 1、混合方式<br/>
Android 通过自定义一个Activity(IOS UIControllerView)，其中TitleBar使用原生代码实现，通过传递的相应参数进行配置化，并且提供Api进行操作，内容ContentView部分使用weex SDK来进行渲染<br/>

#### 2、参数传递方式：
   1. Android 使用Intent的Bundle（IOS使用Delegate）传递，主要用于原生界面导向混合界面参数传递，传递方式不定，只要有对应的参数获取与解析方案即可
   2. URL传递 Activity（UIControllerView）需要配置为接受data（URL）参数，url参数在前端ES6中进行了编码，需要<font style="color:red">解码</font>
   3. 需要将两种传递方式的所有参数都进行提取，转成Map及JSONString，用于Activity（UIControllerView）初始化并传递给`Weex`实例

#### 3、参数处理方式
   1. title：控制TitleBar的标题
   2. titleIcon：控制TitleBar标题Icon
   3. icons：控制TitleBar右侧Icons菜单，支持1-2个Icons,使用逗号`,`分隔，例如`icons='share,save'`，表示右侧会构建两个Icon菜单，规则：`如果只有一个，就放在最右侧位置，如果有两个
      则，第一个放在最右侧，第二个放在第一个之前`
   4. loading `ui+`：Activity（UIControllerView）启动后是否自动显示加载动画遮罩（菊花），weex界面解析需要一定时间，
      通过weex代码来调用loading效果会出现界面启动后一段时间（`<1s`）Content部分空白，也没有加载数据的感觉，用户体验不佳
   5. bundleJs：jsBundle地址，用于weex SDK解析的js文件，`url调用时，bundleJs就是不带参数的路径`

#### 4、需要传递给前端的参数
   1. 解析的所有参数都需要传递给对应Activity（UIControllerView）中的mInstance对象实例，便于前端获取使用
   2. Token：用户登录信息所带的token，返回给前端，用于前端数据请求
   3. AppType：APP 类型，`1:Android,2:IOS`
   4. ApiType `-`：Api类型，目前传1
   5. ApiVersion `-`：Api版本，目前随便传
   6. AppVersion：App版本号
   7. host：接口域名地址,支持debug模式下服务器选择,js中使用的api服务器由原生配置提供，为了Web端统一，最终会在其中配置默认host

#### 5、参数传递给前端的方式
   1. Android
       ```Java
             /**
               * WXSample
               * template bundleJs 地址
               * option 可以为空，或者通过option传入 js需要的参数。例如bundle js的地址等。
               * jsonInitData 写入到js绑定属性中的参数
               */
               mInstance.render(getPageName(), WXFileUtils.loadAsset(bundleJs, getApplicationContext()),options,jsonInitData.toJSONString(), WXRenderStrategy.APPEND_ASYNC);
       ```
   2. IOS
       ```OC
                /**
                  * url bundleJs 地址
                  * option 可以为空，或者通过option传入 js需要的参数。例如bundle js的地址等。
                  * data 写入到js绑定属性中的参数
                  */
          [_instance renderWithURL:url options:@{@"bundleUrl":[self.url absoluteString]} data:nil];
       ```
   3. 0.1中使用的是通过jsonInitData或data直接写入到js的对象属性中

#### 6、接入逻辑：
   1. 设置主界面布局资源
   2. 解析接受到的参数，根据参数动态布局TitleBar
   3. `ui +`判断网络是否正常，如果无网络连接则显示网络异常图片，不实例化Weex，否则正常加载Weex，网络异常提供刷新按钮，点击后重新检测网络状况，并作出相应处理
   4. 接入文档： [集成Weex到现有项目](https://weex.apache.org/cn/guide/integrate-to-your-app.html)
   5. sdk开源源码及SDK下载：[Weex 开源源码](https://github.com/apache/incubator-weex)
   6. 接入Example:[Android Example](https://github.com/apache/incubator-weex/tree/master/android/playground)  [IOS Example](https://github.com/apache/incubator-weex/tree/master/ios/playground)
   6. Android 需要配置ndk.abiFilter=`"armeabi","x86"` weex sdk提供`x86`和`armeabi`格式so，否则在部分Android CPU中会初始化失败

#### 7、事件广播：
   1. 头部导航栏最右侧菜单Click事件=>js中全局事件`right_action_click`
   2. 头部导航栏右侧二级菜单Click事件=>js中全局事件`right_action1_click`


# Weex Module开发
  1. 开发文档 [Android Module扩展](http://weex-project.io/cn/references/advanced/extend-to-android.html) [IOS Module扩展](http://weex-project.io/cn/references/advanced/extend-to-ios.html)
  2. TitleBarModule： <font style="color:#FF69B4">v 0.1</font>
    1. moduleName:`"titleBarModule"`
    2. 说明：用于通过js动态调整头部导航栏UI及事件
    3. Api
        1. setTitle(`/*String*/`title)：修改头部导航标题
        2. setRightAction(`/*Map*/ action`)：修改最右侧菜单，action支持参数：`{text:[String,文字],icon:[String,Icon]}`
        3. setSecondaryRightAction(`/*Map*/ action`) 修改最右侧二级菜单，action支持参数：`{icon:[String,Icon]}`
        4. setTitleIcon(`/*String*/ icons`) 修改头部导航右侧Icons,规则参考 `参数处理方式`

  3. ToastModule： <font style="color:#FF69B4">v 0.1</font>
    1. moduleName:`"toastModule"`
    2. 说明：用于显示自定义Toast
    3. Api
        1. toastByNativeView(`/*String*/ title,/*String*/ secondaryTitle,/*String*/ icon`)：显示自定义Toast,参数都可为`null`

  4. LoadingModule：<font style="color:#FF69B4">v 0.1</font>
    1. moduleName:`"loadingModule"`
    2. 说明：用于调用加载菊花
    3. Api
        1. showLoading() 显示加载菊花
        2. dismissLoading() 关闭加载菊花
        3. getLoadingStatus(`/*JSCallback callback*/`) 获取是否显示的状态

  5. BackPressModule：<font style="color:#FF69B4">v 0.1</font>
    1. moduleName:`"backPressModule"`
    2. 说明：用于拦截返回事件的Api，用于前端处理
    3. Api
        1. setCallBackByJsMode(`/*String*/ mode`) `mode: only|with;only完全交给js处理，不会触发原生返回机制，with处理前端拦截的同时执行原生返回机制
    4. ES6 中拦截方式：全局事件`keyBack`

  6. ShareModule：<font style="color:#FF69B4">v 0.1</font>
    1. moduleName:`"shareModule"`
    2. 说明：用于js调用APP中分享功能
    3. Api
        1. openShareUI(`/*Map*/ shareConfig`)：
        ```
        shareConfig:{
              title:"String",//分享标题
              detailId:"String",//分享Id
              type:"String",//分享类型
              shareLink:"String",//分享链接
              imageUrl:"String",//分享图片Url
              content:"String",//content内容，用于应用内分享时popup显示
              icon:"String"//icon,用于应用内分享时popup显示
        }
        ```

   7. RefreshModule：<font style="color:#FF69B4">v 0.1</font>
    1. moduleName:`"refreshModule"`
    2. 说明：用于控制下拉刷新状态
    3. Api
        1. setEnable(`/*String*/ ref,/*boolean*/enable`)  `ref:wx-refresh组件实例，enable:是否启用`
        2. setRefresh(`/*String*/ref,/*boolean*/refresh`) 'ref:wx-refresh组件实例，refresh:刷新状态'

# Weex Component开发
 1. 开发文档 [Android Module扩展](http://weex-project.io/cn/references/advanced/extend-to-android.html) [IOS Module扩展](http://weex-project.io/cn/references/advanced/extend-to-ios.html)
 2. RefreshComponent：<font style="color:#FF69B4">v 0.1</font>
   1. componentName:`"wx-refresh"`
   2. 说明：封装刷新container
   3. example
    ```
        <wx-refresh ref="refresh" color="#ffc400" class="flex_1" auto="true" @refresh="refresh">
        </wx-refresh>
    ```
    1. color:设置刷新组件的颜色
    2. auto:是否在加载完成后自动开启刷新
    3. @refresh:刷新事件

 3. ProgressBarComponent：<font style="color:#FF69B4">v 0.1</font>
    1. componentName:`"progressbar"`
    2. 说明：圆形进度条
    3. example
        ```
           <progressbar style="width: 32px;height: 32px;"></progressbar>
        ```

# 前端开发
 1. option传递的参数获取：`this.$getConfig().bundleUrl`
 2. data传递的参数获取：`this.host`
 3. 创建开发工程：`weex init Vue`
 4. H5运行：`npm run dev` `npm run serve`
 5. 编译工程：`weex compile src/foo.vue dist` `weex compile src dist`
 6. 前端不统一规则： <font style="color:#FF69B4">wip</font>
    1. ajax参数通过原生传递，前端不能获取
    2. 图片资源使用`local:///`协议，前端不识别,需要调整使用
    3. 自定义Module在前端不能识别，前端需要单独定制
    4. 前端Vue实例间参数传递需要通过url来单独解析
    5. 前端没有TitleBar，需要配合定制

 7. 前端关于图片问题处理： `v0.1`
    1. Web端由于`local://`协议限制，并不支持访问本工程中的文件，因此图片资源会加载失败，参考`fis3`前端构建工具的资源定位进行处理


# SDK修改
 1. Android SDK 修改ScrollView 设置下拉阴影
 2. Android SDK 修改BaseActivity的category,`category影响navigator.push` 调整为`com.syq.android.intent.category.WEEX`