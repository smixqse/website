module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      keyframes: {
        gotoleft: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(20deg)" },
          "100%": { transform: "rotate(0deg)" }
        },
        gotoright: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(-20deg)" },
          "100%": { transform: "rotate(0deg)" }
        },
        backanim: {
          "0%": { transform: "translateY(0vh)" },
          "100%": { transform: "translateY(-150vh)" }
        }
      },
      animation: {
        gotoleft:
          "gotoleft 600ms cubic-bezier(0,1.02,1,.95) 400ms 1 normal forwards",
        gotoright:
          "gotoright 600ms cubic-bezier(0,1.02,1,.95) 400ms 1 normal forwards",
        backanim:
          "backanim 3500ms cubic-bezier(0,1.02,1,.99) 400ms 1 normal forwards"
      },
      colors: {
        primary: "#ffffff",
        background: "#000000"
      }
    },
    fontFamily: {
      sans: ["Segoe UI", "ui-sans-serif"]
    }
  }
};
