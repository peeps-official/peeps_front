/** @type {import('tailwindcss').Config} */

export const mainWidth = '1140px'
export const headerSize = '60px'

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
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
        detail: '#666',
        white: '#fff',
        gray: {
          lightest: '#e0e2e7',
          lighter: '#D9D9D9',
          light: '#8c8d9d',
          medium: 'rgba(0, 0, 0, 0.37)',
          dark: 'rgba(0, 0, 0, 0.05)',
          afterDark: 'rgba(0, 0, 0, 0.1)',
          darkest: '#1d1c1d',
        },
        underline: 'rgba(0, 0, 0, 0.1)',
        black: '#000',
        blue: {
          100: '#0066ff',
          200: '#5D9EFF',
          soft: '#cad6eb',
          primary: '#0066ff',
          primaryHover: '#0055cc',
          secondary: '#5D9EFF',
          secondaryHover: '#4d88cc',
        },
        pupple: {
          deep: '#292339',
        },
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
      //font
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
      //text
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
      huge: '28px',
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
      default: '1',
      header: '1000',
      modalBackground: '2000',
      modal: '2001',
    },
    boxShadow: {
      xl: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      box: '0px 1px 1px rgba(0, 0, 0, 0.1), 0px 0px 1px rgba(0, 0, 0, 0.25)',
      loginBox: '0 8px 16px rgba(182,190,204,.5)',
      popupBox: '0px 0px 1px 0px rgba(0, 0, 0, 0.25), 0px 1px 1px 0px rgba(0, 0, 0, 0.10);',
      circleBadge: '0 0 0 1px #1f232826',
    },
  },
  corePlugins: {
    preflight: false,
  },
}
