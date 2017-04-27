// You can install more packages below to config more as you like:
// eslint
// babel-eslint
// eslint-config-standard
// eslint-loader
// eslint-plugin-html
// eslint-plugin-promise
// eslint-plugin-standard
// postcss-cssnext

let path = require('path');
let webpack = require('webpack');
let fs = require('fs'),fstat = fs.stat;

let Config={
    js_entry:{
        app: path.resolve('./app.js')
    },
    getJsEntry:function (dir, root) {
        let directory = path.join(__dirname, root, dir);
        fs.readdirSync(directory).forEach(function (file) {
            let fullpath = path.join(directory, file);
            let stat = fs.statSync(fullpath);
            // support for vue file,如果是js文件需要打包到lib中
            if(stat.isFile()){
                if(path.extname(fullpath) === '.we'){
                    let name = path.join(dir, path.basename(file, '.we'));
                    Config.js_entry[name] = fullpath + '?entry=true'
                }else if(path.extname(fullpath) === '.vue'){
                    let name = path.join(dir, path.basename(file, '.vue'));
                    Config.js_entry[name] = fullpath + '?entry=true'
                }else if(path.extname(fullpath) === '.js'){
                    let name = path.join(dir, path.basename(file, '.js'));
                    //lib目录下进行打包,js文件不能使用entry=true，否则不会进行es6转换
                    if(name.indexOf("lib")>=0)
                        Config.js_entry[name] = fullpath
                }
            }else if(stat.isDirectory()){
                let subdir = path.join(dir, file);
                Config.getJsEntry(subdir, root);
            }
        });
        return Config.js_entry;
    },
    JSConfig:function () {
        //生成js的Config
        return {
            entry: Config.getJsEntry('./', 'src'),
            output: {
                path: 'dist',
            },
            module: {
                // // You can use ESLint now!
                // // Please:
                // // 1. npm install {
                // //   babel-eslint
                // //   eslint
                // //   eslint-config-standard
                // //   eslint-loader
                // //   eslint-plugin-html
                // //   eslint-plugin-promise
                // // } --save-dev
                // // 2. set .eslintrc
                // //   take { "extends": "standard" } for example
                // //   so you need: npm install eslint-plugin-standard --save-dev
                // // 3. set the config below
                // preLoaders: [
                //   {
                //     test: /\.vue$/,
                //     loader: 'eslint',
                //     exclude: /node_modules/
                //   },
                //   {
                //     test: /\.js$/,
                //     loader: 'eslint',
                //     exclude: /node_modules/
                //   }
                // ],
                loaders: [
                    {
                        test: /\.js$/,
                        loader: 'babel',
                        exclude: /node_modules/
                    }, {
                        test: /\.vue(\?[^?]+)?$/,
                        loaders: []
                    }
                ]
            },
            vue: {
                // // You can use PostCSS now!
                // // Take cssnext for example:
                // // 1. npm install postcss-cssnext --save-dev
                // // 2. write `var cssnext = require('postcss-cssnext')` at the top
                // // 3. set the config below
                // postcss: [cssnext({
                //   features: {
                //     autoprefixer: false
                //   }
                // })]
            },
            plugins: [new webpack.BannerPlugin(
                '// { "framework": "Vue" }\n',
                { raw: true }
            )]
        }
    },
    copyFile:function (src, dst) {
        //判断目录是否存在
        fs.readdir( src, function( err, paths ){
            if( err ){
                throw err;
            }
            paths.forEach(function( path ){
                let _src = src + '/' + path,
                    _dst = dst + '/' + path,
                    readable, writable;
                fstat( _src, function( err, st ){
                    if( err ){
                        throw err;
                    }
                    // 判断是否为文件
                    if( st.isFile() ){
                        // 创建读取流
                        readable = fs.createReadStream( _src );
                        // 创建写入流
                        writable = fs.createWriteStream( _dst );
                        // 通过管道来传输流
                        readable.pipe( writable );
                    }
                    // 如果是目录则递归调用自身
                    else if( st.isDirectory() ){
                        Config.copyDir( _src, _dst);
                    }
                });
            });
        });
    },
    mkdirs:function(dirpath, callback) {
        fs.exists(dirpath, function(exists) {
            if(exists) {
                callback(dirpath);
            } else {
                Config.mkdirs(path.dirname(dirpath), function(){
                    fs.mkdir(dirpath, callback);
                });
            }
        });
    },
    copyDir:function (src, dst) {
        fs.exists( dst, function( exists ){
            if(exists){
                Config.copyFile( src, dst );
            }
            // 不存在
            else{
                console.log("创建图片目录");
                Config.mkdirs(dst,function () {
                    Config.copyFile( src, dst );
                })
            }
        });
    },
};
let webConfig=[];
(function () {
    let jsConfig=Config.JSConfig();
    jsConfig.output.filename = 'web/[name].js';
    jsConfig.module.loaders[1].loaders.push('vue');
    webConfig.push(jsConfig);
})();
let weexConfig=[];
(function () {
    let jsConfig=Config.JSConfig();
    jsConfig.output.filename = 'weex/[name].js';
    jsConfig.module.loaders[1].loaders.push('weex');
    weexConfig.push(jsConfig);
})();

//静态资源拷贝
Config.copyDir("./src/images","./dist/web/images");
Config.copyDir("./src/images","./dist/weex/images");

module.exports =webConfig.concat(weexConfig);
