// src/pages/_error.page.js
export { Page }

function Page({ is404 }) {
    return is404 ? 'Page not found' : 'Something went wrong'
}
