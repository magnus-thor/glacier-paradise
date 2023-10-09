export default defineNuxtConfig({
  extends: ["nuxt-seo-kit"],
  css: [
    "@/assets/base.scss",
    "@/assets/mixins.scss",
    "@/assets/variables.scss",
  ],
  typescript: {
    strict: true,
  },
  components: [
    { path: "~/components/homeComponents", prefix: "Home" },
    { path: "~/components/aboutUsComponents", prefix: "About" },
    { path: "~/components/termsComponents", prefix: "Terms" },
    { path: "~/components/tourComponents", prefix: "Tour" },
    { path: "~/components/contactUsComponents", prefix: "ContactUs" },
    "~/components",
  ],
  app: {
    layoutTransition: { name: "layout", mode: "out-in" },
    head: {
      title: "Glacier Paradise, special sightseing tours of Snæfellsjökull",
      meta: [
        {
          name: "description",
          content:
            "Discover the natural wonders of Snæfellsjökull with our exciting tours. Explore the stunning glacier and breathtaking landscapes of the peninsula. Book your adventure today and experience a unique glacier tour in Iceland",
        },
      ],
      script: [
        {
          src: "https://beamanalytics.b-cdn.net/beam.min.js",
          "data-token": "e3a3aef5-4453-48c7-86a7-c65c14ef6554",
          async: true,
        },
        {
          src: "https://w.behold.so/widget.js",
          type: "module",
        },
      ],
    },
  },
  modules: [
    "@nuxtjs/i18n",
    "@nuxtjs/device",
    [
      "nuxt-mail",
      {
        message: {
          to: process.env.NUXT_EMAIL_TO,
        },
        smtp: {
          host: process.env.NUXT_EMAIL_HOST,
          port: process.env.NUXT_EMAIL_PORT,
          auth: {
            user: process.env.NUXT_EMAIL_USERNAME,
            pass: process.env.NUXT_EMAIL_PASSWORD,
          },
        },
      },
    ],
  ],
  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "no_prefix",
    locales: [
      { name: "English", code: "en", iso: "en-gb", file: "en.js" },
      { name: "Íslenska", code: "is", iso: "is-IS", file: "is.js" },
    ],
    defaultLocale: "en",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },
  runtimeConfig: {
    public: {
      siteUrl: "https:www.glacierparadise.is",
      siteName: "Glacier Paradise, special sightseing tours of Snæfellsjökull",
      siteDescription:
        "Discover the natural wonders of Snæfellsjökull with our exciting tours. Explore the stunning glacier and breathtaking landscapes of the peninsula. Book your adventure today and experience a unique glacier tour in Iceland",
    },
  },
});
