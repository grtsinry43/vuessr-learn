import {VueLoaderPlugin} from "vue-loader";
import {fileURLToPath} from 'url';
import {dirname, resolve} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
    mode: 'production',
    entry: resolve(__dirname, "./src/main.js"),
    output: {
        filename: "[name].bundle.js",
        path: resolve(__dirname, "../dist"),
        publicPath: "/",
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
    ],
}
