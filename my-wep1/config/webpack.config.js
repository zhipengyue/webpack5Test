
const path=require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require("webpack").container;

const config={
  mode:"development",
  devServer: {
    port: 3001,
    static: path.join(__dirname, 'dist')
  },
  entry:{
    main:'./src/main.js'
  },
  output:{
    filename:"[name].[contenthash].bundle.js",
    path:path.join(__dirname,"../dist/")
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title:"helloword"
    }),
    new ModuleFederationPlugin({
      name: "app1",
      // 引用 app2 的服务
      remotes: {
        app2: "app2@http://localhost:8080/remoteModuleB.js",
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  }
}
module.exports=config;