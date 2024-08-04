import {VueLoaderPlugin} from "vue-loader";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {fileURLToPath} from 'url';
import {dirname, resolve} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
    mode: 'development', // 设置为 'development' 或 'production' 或 'none'
    entry: resolve(__dirname, "../src/main.js"),
    output: {
        filename: "bundle.js",
        path: resolve(__dirname, "../dist")
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: "vue-loader",
            },
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["vue-style-loader", "css-loader"],
            }
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: resolve(__dirname, "../public/index.html"),
        }),
    ],
}
