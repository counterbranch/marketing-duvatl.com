// Enables typings for `theme.vars` (CSS theme variables) throughout the app.
import type {} from '@mui/material/themeCssVarsAugmentation'
import { createTheme } from '@mui/material/styles'

// The type and inks follow the Counterbranch site: Oswald for display, Inter
// for body, navy #14203C as light-scheme text and neutral near-black as the
// dark ground. The page has no colour toggle, so the scheme follows the
// operating system through a media query and never flashes on load.
const displayFont = "'Oswald Variable', sans-serif"
const bodyFont = "'Inter Variable', sans-serif"

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'media',
  },
  colorSchemes: {
    light: {
      palette: {
        background: { default: '#FAFAFB', paper: '#FFFFFF' },
        text: { primary: '#14203C', secondary: 'rgba(20, 32, 60, 0.72)' },
        divider: 'rgba(20, 32, 60, 0.14)',
      },
    },
    dark: {
      palette: {
        background: { default: '#0A0A0C', paper: '#1A1A1E' },
        text: { primary: '#F7F7F8', secondary: 'rgba(247, 247, 248, 0.72)' },
        divider: 'rgba(255, 255, 255, 0.14)',
      },
    },
  },
  typography: {
    fontFamily: bodyFont,
    h1: {
      fontFamily: displayFont,
      fontWeight: 600,
      fontSize: 'clamp(2.75rem, 8vw, 4.5rem)',
      lineHeight: 1.05,
      letterSpacing: '0.01em',
    },
    body1: { fontSize: '1.125rem', lineHeight: 1.6 },
  },
  components: {
    MuiLink: {
      defaultProps: { color: 'inherit' },
      styleOverrides: {
        root: {
          textDecorationThickness: '1px',
          textUnderlineOffset: '0.2em',
          '&:hover': { textDecorationThickness: '2px' },
        },
      },
    },
  },
})

export default theme
