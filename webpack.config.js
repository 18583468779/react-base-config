const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const path = require("path");
module.exports = {
  mode: "production",
  plugins: [
    new ESLintWebpackPlugin({
      extensions: [".js", ".jsx"], //eslint不加.jsx 就不会检查jsx文件
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/, //文件后缀js,ts
        exclude: /node_modules/, //排除node_modules
        use: {
          loader: "babel-loader",
          options: {
            //presets 预先设置，使用webpack调用loader进行打包
            presets: [
              ["@babel/preset-env"],
              ["@babel/preset-react", { runtime: "classic" }],
              ["@babel/preset-typescript"],
            ],
          },
        },
      },
    ],
  },
};
