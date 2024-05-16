// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	modules: ["@nuxt/ui", "@nuxtjs/google-fonts"],
	colorMode: {
		preference: "light",
	},
	googleFonts: {
		families: {
			Roboto: true,
			"Josefin+Sans": true,
			Lato: [100, 300],
			Raleway: {
				wght: [100, 400],
				ital: [100],
			},
			Inter: "200..700",
			"Crimson Pro": {
				wght: "200..900",
				ital: "200..700",
			},
			"Golos Text": true,
			Rubik: true,
			Unbounded: true,
		},
	},
	css: ["animate.css", "~/assets/css/tailwind.css", "~/assets/css/style.css"],
});
