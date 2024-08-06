// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    components: undefined,
    $development: undefined, $env: undefined, $meta: undefined, $production: undefined, $test: undefined,
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: [
        '@element-plus/nuxt'
    ],
    elementPlus: { /** Options */}
})
