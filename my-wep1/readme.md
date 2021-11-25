#### plugin:
- clean-webpack-plugin 
清楚dist目录
- html-webpack-plugin
目录下生成html
```json
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title:"helloword"
    }),
  ],
```
#### sass-loader
- 单独文件引用
```json
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
```

#### webpack serve
- webpack-dev-server
用来启动项目
```
npm install webpack-dev-server -D
```
package.json的scripts中添加
```
"dev": "webpack serve --config config/webpack.config.js",
```
#### module federation 
导入模块
```
const { ModuleFederationPlugin } = require("webpack").container;
```
plugins:
```
new ModuleFederationPlugin({
      name: "app1",
      // 引用 app2 的服务
      remotes: {
        app2: "app2@http://localhost:3002/remoteEntry.js",
      }
    })
```

