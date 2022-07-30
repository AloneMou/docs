const {backToTopPlugin} = require("@vuepress/plugin-back-to-top");
const {registerComponentsPlugin} = require("@vuepress/plugin-register-components");
const {nprogressPlugin} = require("@vuepress/plugin-nprogress");
const {searchPlugin} = require("@vuepress/plugin-search");
const {viteBundler} = require('@vuepress/bundler-vite')
const {hopeTheme} = require("vuepress-theme-hope");

module.exports = {
    title: 'AA',
    plugins: [
        backToTopPlugin(),
        registerComponentsPlugin({}),
        nprogressPlugin(),
        searchPlugin({
            '/': {
                placeholder: 'Search',
            },
        }),
    ],
    bundler: viteBundler({
        viteOptions: {
            build: {
                assetsDir: 'static',
                outDir: '/dist'
            },
        },
        vuePluginOptions: {},
    }),
    theme: hopeTheme({
        author: {
            name: 'AgoniMou',
            url: 'https://mrhope.site',
        },
        iconAssets: '//at.alicdn.com/t/font_2410206_a0xb9hku9iu.css',
        logo: '/logo.svg',
        repo: 'vuepress-theme-hope/vuepress-theme-hope',
        docsDir: 'demo/src',
        pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime'],
        navbar: [{
            text: '使用指南', icon: 'creative', link: '/zh/guide/'
        }

        ]
    }),
    shouldPrefetch: false,
}
