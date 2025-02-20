//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  compatibilityDate: "2025-02-12",
   experimental: {
    asyncContext: true
  },
   runtimeConfig: {
    jwtTokenSecret: "Jwt_token", // `dev_token` is the default value
    stripeSecretKey: "stripe_secret_key",
  },
  

});