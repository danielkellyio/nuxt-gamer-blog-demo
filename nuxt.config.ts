export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt'
  ],
  content: {
    highlight: {
      theme: 'dracula'
    }
  },
  app: {
    head: {
      title: 'Gaming Chronicles',
      meta: [
        { name: 'description', content: 'Your ultimate source for gaming news and reviews' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Inter:wght@400;600&display=swap' }
      ]
    }
  }
})