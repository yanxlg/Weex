# Stream  <font style="color:#FF69B4;font-size:12px;">v 0.11.0</font>
1. fetch(options,callback)
    1. options:
        1. method:`GET|POST`
        2. url:`路径`
        3. headers:`object`
        4. type:`json|text|jsonp`
        5. body:`参数String,格式为key=val&key=val`
        6. `timeout`:超时设置

    2. callback
        1. status:`状态码`
        2. ok:`boolean，是否正常返回`
        3. statusText:`状态描述`
        4. data:`object|string` 返回数据
        5. headers:`响应头`