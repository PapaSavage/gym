// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    modules: ["@nuxt/ui", "@nuxtjs/google-fonts", "nuxt-vuefire", "@nuxt/eslint"],
    colorMode: {
        preference: "light",
    },
    plugins: ["~/plugins/axios.js"],
    googleFonts: {
        families: {
            "Golos Text": true,
            Rubik: true,
            Unbounded: true,
        },
    },
    css: ["animate.css", "~/assets/css/tailwind.css", "~/assets/css/style.css"],
    vuefire: {
        auth: { enabled: true, sessionCookie: true },
        config: {
            apiKey: "AIzaSyAb-bQl49JoOqLVBFupnN1VDijWtuRKBiM",
            authDomain: "mdk-site-df4de.firebaseapp.com",
            projectId: "mdk-site-df4de",
            storageBucket: "mdk-site-df4de.appspot.com",
            messagingSenderId: "355269898707",
            appId: "1:355269898707:web:f0803d1381a7b58417ff26",
        },
    },
});