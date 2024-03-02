/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-gray": "#f7f7f8",
        white: "#fff",
        gray: {
          "100": "#1d1c1d",
          "200": "rgba(0, 0, 0, 0.37)",
          "300": "rgba(0, 0, 0, 0.04)",
        },
        black: "#000",
        whitesmoke: {
          "100": "#f5f5f7",
          "200": "#f0f2f5",
          "300": "#efefef",
        },
        dimgray: {
          "100": "#6f6f6f",
          "200": "#65676b",
        },
        lightgray: "#ced0d4",
        silver: "#b7b7bf",
        dark: "#191a20",
        "gray-30": "#8c8d96",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "small-m": "'Noto Sans KR'",
        lato: "Lato",
      },
      borderRadius: {
        "8xs": "5px",
        "10xs": "3px",
        "11xl": "30px",
        "41xl": "60px",
        "3xs": "10px",
      },
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      mini: "15px",
      "4xs": "9px",
      "3xs": "10px",
      base: "16px",
      "2xs": "11px",
      smi: "13px",
      xl: "20px",
      lg: "18px",
      inherit: "inherit",
    },
    screens: {
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
