import fs from 'fs'
import path from 'path'
import {fileURLToPath} from 'url'
import {escapeInject, dangerouslySkipEscape} from 'vite-plugin-ssr/server'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const template = fs.readFileSync(path.resolve(__dirname, '../template.html'), 'utf-8')

export async function render(pageContext) {
    const {Page} = pageContext
    const pageHtml = dangerouslySkipEscape(Page())
    const documentHtml = escapeInject`${template.replace('{{ APP_HTML }}', pageHtml)}`
    return {
        documentHtml
    }
}
