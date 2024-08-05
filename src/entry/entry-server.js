import {createApp} from '../main'

export async function render(pageContext) {
    const {app, router} = createApp()

    router.push(pageContext.url)
    await router.isReady()

    const appHtml = app.renderToString()
    return {
        appHtml,
        // You can pass other page context properties here (e.g., the initial state)
    }
}
