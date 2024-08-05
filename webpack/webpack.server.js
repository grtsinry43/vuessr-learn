import {merge} from "webpack-merge";
import webpackBase from "./webpack.base.js";
import {fileURLToPath} from 'url';
import {dirname, resolve} from 'path';
import webpack from 'webpack';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default merge(webpackBase, {
    entry: resolve(__dirname, "../src/entry/server.entry.js"),
    output: {
        filename: 'server.bundle.js',
        path: resolve(__dirname, '../dist'),
        libraryTarget: 'module',
        chunkFormat: 'module'
    },
    target: "node",
    experiments: {
        outputModule: true
    },
    plugins: [
        new webpack.DefinePlugin({
            __VUE_PROD_DEVTOOLS__: JSON.stringify(false)
        })
    ]
});
