import express from 'express';
import {createSSRApp} from 'vue';
import {renderToString} from '@vue/server-renderer';

const server = express();

const app = createSSRApp({
    data: () => ({count: 1}),
    template: `
      <button @click="count++">{{ count }}</button>`
})

const appContent = await renderToString(app);

server.get('*', async (req, res) => {
    console.log(appContent);
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head><title>Vue SSR</title></head>
        <body>${appContent}</body>
        </html>
    `);
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
