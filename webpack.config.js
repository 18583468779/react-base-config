const ESLintWebpackPlugin = require("eslint-webpack-plugin");

module.exports = {
  mode: "production",
  plugins: [
    new ESLintWebpackPlugin({
      extensions: [".js", ".jsx"], //不加.jsx 就不会检查jsx文件
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/, //文件后缀js,ts
        exclude: /node_modules/, //排除node_modules
        use: {
          loader: "babel-loader",
          options: {
            //presets 预先设置，使用webpack调用loader进行打包
            presets: [
              ["@babel/preset-env"],
              ["@babel/preset-react", { runtime: "classic" }],
            ],
          },
        },
      },
    ],
  },
};
