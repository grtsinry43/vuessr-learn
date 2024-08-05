import express from 'express'
import {createServer as createViteServer} from 'vite'
import {renderPage} from 'vite-plugin-ssr/server'

async function createServer() {
    const app = express()

    const vite = await createViteServer({
        server: {middlewareMode: true}
    })

    app.use(vite.middlewares)

    app.get('*', async (req, res) => {
        const url = req.originalUrl

        try {
            const pageContext = await renderPage({url})
            const {httpResponse} = pageContext
            if (!httpResponse) return res.status(200).send('No content found')

            res.status(httpResponse.statusCode).set(httpResponse.headers).send(httpResponse.body)
        } catch (e) {
            vite.ssrFixStacktrace(e)
            console.log(e.stack)
            res.status(500).end(e.stack)
        }
    })

    app.listen(3000, () => {
        console.log('Server is listening on http://localhost:3000')
    })
}

createServer()
