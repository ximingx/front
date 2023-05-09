const path = require('path');
const {VueLoaderPlugin} = require('vue-loader/dist/index');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {DefinePlugin} = require('webpack')
module.exports = {
    mode: "production",
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        // 省略后缀
        extensions: [".js", ".vue", ".json", ".ts", ".jsx"],
        // 别名
        alias: {
            "@": path.resolve(__dirname, "src"),
            "assets": path.resolve(__dirname, "src/assets")
        }
    },
    devServer: {
        host: "0.0.0.0",
        port: 3000,
        compress: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // 与postcss.config.js一起使用
                use: ["style-loader", "css-loader", "postcss-loader"]
            },
            //{
            //    test: /\.css$/,
            //    use: ["style-loader", "css-loader", {
            //        loader: "postcss-loader",
            //        options: {
            //            postcssOptions: {
            //                plugins: [
            //                    "autoprefixer"
            //                ]
            //            }
            //        }
            //    }]
            //},
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"]
            },
            {
                // 图片
                test: /\.(png|jpe?g|gif|svg)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        // size < 60kb
                        maxSize: 60 * 1024
                    }
                },
                generator: {
                    // 占位符
                    // [name] 源文件名
                    // [hash] hash
                    // [ext] 源文件后缀
                    filename: "img/[name]_[hash:6][ext]"
                }
            },
            {
                test: /\.js$/,
                use: ["babel-loader"],
            },
            {
                test: /\.vue$/,
                use: ["vue-loader"]
            }
        ]
    },
    // plugins 作用于全局执行广泛的任务
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "webpack",
            template: "./public/index.html"
        }),
        new DefinePlugin({
            BASE_URL: "'./'"
        })
    ]
}
