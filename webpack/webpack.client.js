import {merge} from "webpack-merge";
import webpackBase from "./webpack.base.js";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {fileURLToPath} from 'url';
import {dirname, resolve} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default merge(webpackBase, {
    entry: resolve(__dirname, "../src/entry/client.entry.js"),
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: resolve(__dirname, "../public/index.html"),
        }),
    ],
    output: {
        filename: 'client.bundle.js',
        path: resolve(__dirname, '../dist'),
        libraryTarget: 'module',
        chunkFormat: 'module'
    },
    experiments: {
        outputModule: true
    }
});
