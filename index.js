'use strict'

const bg0 = '#293339'
const bg1 = '#323c41'
const bg2 = '#3a454a'
const bg3 = '#fff9e8'
const bg4 = '#f2ecdb'
const bg5 = '#e6e1d1'

const palette = {
  dark: {
    colors: {
      black: "#4c565c",
      red: "#e67e80",
      green: "#a7c080",
      yellow: "#dbbc7f",
      blue: "#7fbbb3",
      magenta: "#d699b6",
      cyan: "#83c092",
      white: "#d3c6aa",
      lightBlack: '#859289',
    },
    fg: '#d3cacc',
    bg: bg0,
    borderColor: bg1,
    dividerBg: bg2,
    selectionColor: 'rgba(68, 80, 85, 0.88)'
  },
  light: {
    colors: {
      black: "#5c6a72",
      red: "#f85552",
      green: "#8da101",
      yellow: "#dfa000",
      blue: "#3a94c5",
      magenta: "#df69ba",
      cyan: "#35a77c",
      white: "#dfddc8"
    },
    fg: '#5c6a72',
    bg: bg3,
    borderColor: bg4,
    dividerBg: bg5,
    selectionColor: 'rgba(92, 106, 114, 0.2)'
  }
}

module.exports.decorateConfig = config => {
  const theme = config.everforestTheme || 'dark'
  const pt = palette[theme]

  const lightColors = Object.fromEntries(
    Object.entries(pt.colors).map(([key, value]) => {
      // if the key starts with "light", we'll return it.
      // otherwise we'll just use the same value as the non-light color.
      // e.g., if key is red, we'll make lightRed equal red.
      // if we have a key lightBlack, it will use that value instead of the black value.
      if (key.startsWith('light')) {
        return [key, value]
      }
      return [
        `light${key.charAt(0).toUpperCase()}${key.slice(1)}`,
        value
      ]
    })
  )

  const backgroundColor = pt.bg
  const foregroundColor = pt.fg
  const cursorColor = config.cursorColor || pt.colors.cyan
  const borderColor = pt.borderColor
  const selectionColor = pt.selectionColor
  const dividerBg = pt.dividerBg
  const tabNavBg = theme === 'dark' ? '#1c262d' : bg4
  const tabText = theme === 'dark' ? pt.colors.lightBlack : pt.colors.black
  const tabTextActive = theme === 'dark' ? pt.colors.white : pt.colors.black

  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    selectionColor,
    colors: {
      ...pt.colors,
      ...lightColors,
    },
    termCSS: `
      ${config.termCSS || ''}
      .terminal a {
        color: ${pt.colors.cyan};
      }
    `,
    css: `
      ${config.css || ''}
      .tabs_nav {
        background-color: ${tabNavBg};
        border-bottom: 1px solid ${borderColor};
      }
      /* hide the tab border shim, we are providing our own */
      .tabs_borderShim {
        border-bottom-width: 0px;
      }
      /* Hide title when only one tab */
      .tabs_title {
  			display: none !important;
  		}
      .tab_textInner {
        color: ${tabText};
        font-weight: 500;
      }
      .tab_tab.tab_active {
        background-color: ${backgroundColor};
      }
      .tab_tab.tab_active .tab_textInner {
        color: ${tabTextActive};
      }
      .splitpane_divider {
        background-color: ${dividerBg} !important;
      }
    `
  })
}
