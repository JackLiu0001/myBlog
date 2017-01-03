var path = require('path');
var webpack = require('webpack');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH);
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
console.log(ROOT_PATH, APP_PATH, BUILD_PATH);

module.exports = {
  //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
  entry: {
  	'app': path.resolve(APP_PATH, 'public/js/entry.js'),
  	'vendors': ['jquery', 'angular', 'angular-ui-router']
  },
  //输出的文件名 合并以后的js会命名为bundle.js
  output: {
    path: BUILD_PATH,
    filename: '[name].bundle.js'
  },
  
  plugins: [
    // webpack提供一个插件，把一个全局变量插入到所有的代码中，在config.js里面配置
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ],
};