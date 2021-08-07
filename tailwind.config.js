module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      keyframes: {
        below: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(50vh)" }
        }
      },
      animation: {
        below: "below 500ms ease-in-out 1 normal forwards"
      }
    }
  }
};
