// You can install more packages below to config more as you like:
// eslint
// babel-eslint
// eslint-config-standard
// eslint-loader
// eslint-plugin-html
// eslint-plugin-promise
// eslint-plugin-standard
// postcss-cssnext

var path = require('path')
var webpack = require('webpack')

var fs = require('fs');
var entry = {
    app: path.resolve('./app.js')
};

function walk(dir, root) {
    var directory = path.join(__dirname, root, dir)
    fs.readdirSync(directory).forEach(function (file) {
        var fullpath = path.join(directory, file)
        var stat = fs.statSync(fullpath)
        // support for vue file,如果是js文件需要打包到lib中
        if(stat.isFile()){
            if(path.extname(fullpath) === '.we'){
                var name = path.join(dir, path.basename(file, '.we'));
                entry[name] = fullpath + '?entry=true'
            }else if(path.extname(fullpath) === '.vue'){
                var name = path.join(dir, path.basename(file, '.vue'));
                entry[name] = fullpath + '?entry=true'
            }else if(path.extname(fullpath) === '.js'){
                var name = path.join(dir, path.basename(file, '.js'));
                //lib目录下进行打包,js文件不能使用entry=true，否则不会进行es6转换
                if(name.indexOf("lib")>=0)
                    entry[name] = fullpath
            }
        }else if(stat.isDirectory()){
            var subdir = path.join(dir, file)
            walk(subdir, root)
        }
    })
}
walk('./', 'src');

var bannerPlugin = new webpack.BannerPlugin(
    '// { "framework": "Vue" }\n',
    { raw: true }
);

function getBaseConfig () {
    return {
        entry: entry,
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
        plugins: [bannerPlugin]
    }
}

var webConfig = getBaseConfig()
webConfig.output.filename = 'web/[name].js'
webConfig.module.loaders[1].loaders.push('vue')

var weexConfig = getBaseConfig()
weexConfig.output.filename = 'weex/[name].js'
weexConfig.module.loaders[1].loaders.push('weex')

module.exports = [webConfig, weexConfig]
