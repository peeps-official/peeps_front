/** @type {import('tailwindcss').Config} */

export const mainWidth = '1140px'
export const headerSize = '64px'

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      width: {
        base: `${mainWidth}`,
      },
      height: {
        header: `${headerSize}`,
      },
      padding: {
        header: `${headerSize}`,
      },
      margin: {
        center: '0 auto',
      },
      colors: {
        background: '#f7f7f8',
        "primary-blue": "#0066ff",
        white: '#fff',
        gray: {
          10: '#e0e2e7',
          100: '#1d1c1d',
          200: 'rgba(0, 0, 0, 0.37)',
          300: 'rgba(0, 0, 0, 0.04)',
        },
        underline: '#D6D6D6',
        black: '#000',
        whitesmoke: {
          100: '#f5f5f7',
          200: '#f0f2f5',
          300: '#efefef',
        },
        dimgray: {
          100: '#6f6f6f',
          200: '#65676b',
        },
        lightgray: '#ced0d4',
        silver: '#b7b7bf',
        dark: '#191a20',
        'gray-30': '#8c8d96',
        kakao: '#fee500',
        naver: '#03c75a',
      },
      spacing: {},
      fontFamily: {
        kr: '"Noto Sans KR", sans-serif',
      },
      borderRadius: {
        '8xs': '5px',
        '10xs': '3px',
        '11xl': '30px',
        '41xl': '60px',
        '3xs': '10px',
      },
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    fontSize: {
      detail: '10px',
      micro: '12px',
      tiny: '13px',
      mini: '15px',
      small: '14px',
      base: '16px',
      medium: '18px',
      semilarge: '20px',
      large: '24px',
      inherit: 'inherit',
    },
    screens: {
      mq825: {
        raw: 'screen and (max-width: 825px)',
      },
      mq675: {
        raw: 'screen and (max-width: 675px)',
      },
      mq450: {
        raw: 'screen and (max-width: 450px)',
      },
    },
    zIndex: {
      header: '1000',
    },
    boxShadow: {
      box: '0px 1px 1px rgba(0, 0, 0, 0.1), 0px 0px 1px rgba(0, 0, 0, 0.25)',
      loginBox: '0 8px 16px rgba(182,190,204,.5)',
    },
  },
  corePlugins: {
    preflight: false,
  },
}
