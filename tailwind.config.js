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
        white: '#fff',
        gray: {
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
        inter: 'Inter',
        'small-m': "'Noto Sans KR'",
        lato: 'Lato',
      },
      borderRadius: {
        '8xs': '5px',
        '10xs': '3px',
        '11xl': '30px',
        '41xl': '60px',
        '3xs': '10px',
      },
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      mini: '15px',
      '4xs': '9px',
      '3xs': '10px',
      base: '16px',
      '2xs': '11px',
      smi: '13px',
      xl: '20px',
      lg: '18px',
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
    },
  },
  corePlugins: {
    preflight: false,
  },
}
