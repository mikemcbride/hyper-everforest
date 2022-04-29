'use strict'

const bg0 = '#293339'
const bg1 = '#323c41'
const bg2 = '#3a454a'
const bg3 = '#445055'
const bg4 = '#4c565c'
const bg5 = '#53605c'

// const black = '#2b3339'
// const white = '#d3c6aa'
// const red = '#4e3e43'
// const green = '#404d44'
// const yellow = '#4a4940'
// const blue = '#394f5a'
// const magenta = '#503946'
// const cyan = '#4ff2f8'

const black = "#4c565c"
const red = "#e67e80"
const green = "#a7c080"
const yellow = "#dbbc7f"
const blue = "#7fbbb3"
const magenta = "#d699b6"
const cyan = "#83c092"
const white = "#d3c6aa"
const lightBlack = '#859289'

const colors = {
  black,
  red,
  green,
  yellow,
  blue,
  magenta,
  cyan,
  white,
  lightBlack,
  lightRed: red,
  lightGreen: green,
  lightYellow: yellow,
  lightBlue: blue,
  lightMagenta: magenta,
  lightCyan: cyan,
  lightWhite: white
}

module.exports.decorateConfig = config => {
  const backgroundColor = bg0
  const foregroundColor = white
  const cursorColor = config.cursorColor || '#6ec28e'
  const borderColor = bg1
  const selectionColor = 'rgba(68, 80, 85, 0.88)'
  const tabNavBg = '#1c262d'
  const tabText = '#859289'
  const tabTextActive = white
  const dividerBg = bg2

  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    selectionColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
      .terminal a {
        color: ${cyan};
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
