module.exports = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.jsx?$/, //文件后缀js,ts
        exclude: /node_modules/, //排除node_modules
        use: {
          loader: "babel-loader",
          options: {
            //presets 预先设置，使用webpack调用loader进行打包
            presets: [["@babel/preset-env"], ["@babel/preset-react"]],
          },
        },
      },
    ],
  },
};
