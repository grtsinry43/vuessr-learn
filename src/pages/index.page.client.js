// src/pages/index.page.client.js
import {createApp} from '../main'

export {render}

function render(pageContext) {
    const {app, router} = createApp()
    router.push(pageContext.url)
    app.mount('#app')
}
