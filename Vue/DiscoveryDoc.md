# 新发现首页说明文档

* 实例化时原生传递给Weex前端的参数
    1. Token
    2. AppType
    3. ApiType
    4. ApiVersion
    5. AppVersion
    6. host

* weex提供给原生的加载事件
    * 全局事件GlobalEvent
    * 事件名：discoveryLoad
    * 事件接收参数：{code:"城市code"}

* Activity||Controller跳转
    * 需要开发单独Module给weex来调用
    * ModuleName :"navigatorModule"
    *  void open(String type,Map item)
    *  -open(NSString type,NSDictionary item)
    * 参数说明
        1. 第一个参数是类型，控制向哪个Activity或控制器跳转
        2. 第二个参数是传递给控制器或者Activity的参数，与定义的实体类对应

    * type枚举值
        1. "discoverSpecial":新发现首页轮播点击跳转到详情
        2. "dis_activity": 分类——活动调转到列表页
        3. "dis_gift":分类——礼品跳转到列表页
        4. "dis_others":分类——其他 跳转到列表页
        5. "dis_detail": 推荐项跳转到详情页
        6. "dis_more": 显示更多跳转


* 图片Adapter Protocol 添加对于placeholder占位图支持
* IOS轮播可能存在诡异现象，需要单独定制Component
* 如果需要下拉刷新IOS需要封装成Component,Android端已经封装完成
    * 下拉刷新组件名：wx-refresh
    * 支持属性：
        1. auto：界面打开时自动触发下拉刷新操作
        2. refresh：回调给前端的刷新事件名
        
        
    