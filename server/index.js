import express from "express";
import createApp from "../dist/server.bundle.js";
import {renderToString} from "@vue/server-renderer";
import fs from "node:fs/promises"; // 使用 promises 版本的 fs 模块

const server = express();
server.use(express.static('dist', { index: false }));

server.get("/", async (req, res) => {
    try {
        const template = await fs.readFile('public/index.html', 'utf-8');
        const {app} = createApp();
        const appContent = await renderToString(app);
        console.log(appContent)
        const html = template.replace('<div id="app"></div>', `<div id="app">${appContent}</div>`);
        res.end(html);
    } catch (error) {
        console.error("Error during SSR:", error);
        res.status(500).end("Internal Server Error");
    }
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
