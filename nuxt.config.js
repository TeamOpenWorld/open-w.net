export default {
    // Target (https://go.nuxtjs.dev/config-target)
    target: "static",

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        titleTemplate: "%s - TeamOpenWorld",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            {
                hid: "description",
                name: "description",
                content: "Official site of TeamOpenWorld."
            },
            {
                hid: "og:site_name",
                property: "og:site_name",
                content: "TeamOpenWorld Official Site"
            },
            { hid: "og:type", property: "og:type", content: "website" },
            { hid: "og:url", property: "og:url", content: "https://open-w.net" },
            { hid: "og:image", property: "og:image", content: "https://i.gyazo.com/03d4e0f0958f116a0f6162bf2318a381.png" },
            { name: "twitter:card", content: "summary" }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        "bootstrap-vue/nuxt",
        "nuxt-webfontloader",
        "@nuxtjs/axios"
    ],

    webfontloader: {
        google: {
            families: ["Noto+Sans+JP"]
        }
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {}
};
