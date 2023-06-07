// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@pinia/nuxt'],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData:
						'@use "@/assets/_global.scss" as *;',
				},
			},
		},
	},
	runtimeConfig: {
		public: {
			baseApi: process.env.API_BASE_URL,
		},
	},
});
