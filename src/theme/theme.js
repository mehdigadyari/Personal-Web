import { createMuiTheme } from '@material-ui/core/styles'
import palette from './palette'
import { getDirection, getFont } from '../localization'

// eslint-disable-next-line import/no-mutable-exports
let theme = createMuiTheme()
theme = createMuiTheme({
  direction: getDirection(),
  palette,
  spacing: 2.5,
  typography: {
    allVariants: {
      fontFamily: 'IRANSans'
    },
    h1: {
      fontWeight: 700,
      fontSize: getDirection() === 'rtl' ? 50 : 52,
      lineHeight: '4rem',
      color: '#FFF',
      [theme.breakpoints.down('xs')]: {
        fontSize: getDirection() === 'rtl' ? 40 : 42
      }
    },
    h2: {
      fontWeight: 700,
      fontSize: getDirection() === 'rtl' ? 38 : 40,
      lineHeight: '3.2857rem',
      color: '#FFF',
      [theme.breakpoints.down('xs')]: {
        fontSize: getDirection() === 'rtl' ? 32 : 34
      }
    },
    h3: {
      fontWeight: 600,
      fontSize: getDirection() === 'rtl' ? 30 : 32,
      lineHeight: '2.7rem',
      color: '#FFF',
      textAlign: 'left',
      [theme.breakpoints.down('xs')]: {
        fontSize: getDirection() === 'rtl' ? 28 : 30
      }
    },
    h4: {
      fontWeight: 600,
      fontSize: getDirection() === 'rtl' ? 26 : 28,
      lineHeight: '2.43rem',
      fontFamily: getFont(),
      color: '#FFF',
      [theme.breakpoints.down('xs')]: {
        fontSize: getDirection() === 'rtl' ? 22 : 24
      }
    },
    h5: {
      fontWeight: 600,
      fontSize: getDirection() === 'rtl' ? 21 : 23,
      lineHeight: '2.14rem',
      fontFamily: getFont(),
      color: '#FFF',
      [theme.breakpoints.down('xs')]: {
        fontSize: getDirection() === 'rtl' ? 18 : 20
      }
    },
    h6: {
      fontWeight: 600,
      fontSize: getDirection() === 'rtl' ? 16 : 18,
      lineHeight: '1.857rem',
      fontFamily: getFont(),
      [theme.breakpoints.down('xs')]: {
        fontSize: getDirection() === 'rtl' ? 14 : 16
      }
    },
    body1: {
      fontSize: getDirection() === 'rtl' ? 16 : 19,
      fontFamily: getFont(),
      lineHeight: '1.8rem',
      color: '#a4acc4',
      fontWeight: 400,
      textAlign: getDirection() === 'rtl' ? 'justify' : 'left',
      [theme.breakpoints.down('xs')]: {
        fontSize: getDirection() === 'rtl' ? 13 : 15
      }
    },
    body2: {
      fontSize: getDirection() === 'rtl' ? 13 : 15,
      color: '#a4acc4',
      fontFamily: getFont(),
      fontWeight: 600,
      letterSpacing: 1,
      textAlign: 'center',
      [theme.breakpoints.down('xs')]: {
        fontSize: getDirection() === 'rtl' ? 11 : 13
      }
    },

    subtitle1: {
      fontWeight: 400,
      fontSize: getDirection() === 'rtl' ? 18 : 20,
      lineHeight: '2rem',
      fontFamily: getFont(),
      marginTop: 15,
      [theme.breakpoints.down('xs')]: {
        fontSize: getDirection() === 'rtl' ? 15 : 17
      }
    },

    caption: {
      fontSize: 12,
      fontWeight: 200
    },
    button: {
      fontWeight: 400,
      fontSize: getDirection() === 'rtl' ? 12 : 14,
      color: '#FFF',
      lineHeight: 2,
      letterSpacing: 2,
      [theme.breakpoints.down('xs')]: {
        fontSize: getDirection() === 'rtl' ? 12 : 14
      }
    }
  }
})
export default theme
