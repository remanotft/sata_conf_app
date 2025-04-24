import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
    app: {
        head: {
            title: '45th SATA Conference 2025',
            htmlAttrs: {
                lang: 'en',
            },
            meta: [
                { charset: 'utf-8' },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no',
                },
                { hid: 'description', name: 'description', content: '' },
                { name: 'format-detection', content: 'telephone=no' },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap',
                },
            ],
        },
    },
    devtools: { enabled: true },
    css: ['~/assets/css/app.css'],
    postcss: {
        plugins: {
            'postcss-import': {},
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    runtimeConfig: {
		apiBase: process.env.NUXT_DNA_API_BASE,
        public: {
            posthogPublicKey: 'phc_rZ1RjqlThtKR3naxXaa6zMwZGIr1K6afoJqTtF6wnWL',
            posthogHost: 'https://us.i.posthog.com'
          }
	},
    modules: ['@pinia/nuxt', '@nuxtjs/i18n', '@sidebase/nuxt-auth', '@primevue/nuxt-module'],
    auth: {
        baseURL: process.env.AUTH_ORIGIN
    },
    primevue: {
		options: {
			theme: {
				preset: Aura,
                options: {
                    darkModeSelector: false
                }
			}
		}
	},
    i18n: {
        locales: [
            { code: 'da', file: 'da.json' },
            { code: 'de', file: 'de.json' },
            { code: 'el', file: 'fr.json' },
            { code: 'en', file: 'en.json' },
            { code: 'es', file: 'es.json' },
            { code: 'fr', file: 'fr.json' },
            { code: 'hu', file: 'hu.json' },
            { code: 'it', file: 'it.json' },
            { code: 'ja', file: 'ja.json' },
            { code: 'pl', file: 'pl.json' },
            { code: 'pt', file: 'pt.json' },
            { code: 'ru', file: 'ru.json' },
            { code: 'sv', file: 'sv.json' },
            { code: 'tr', file: 'tr.json' },
            { code: 'zh', file: 'zh.json' },
            { code: 'ae', file: 'ae.json' },
        ],
        lazy: true,
        defaultLocale: 'en',
        strategy: 'no_prefix',
        langDir: 'locales/',
    },
    vite: {
        optimizeDeps: { include: ['quill'] },
    },
    router: {
        options: { linkExactActiveClass: 'active' },
    },
    compatibilityDate: '2024-09-21',
});