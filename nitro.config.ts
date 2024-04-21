//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  prerender: {
    routes: ["/api/test"],
  }
});
