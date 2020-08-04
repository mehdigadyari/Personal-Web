import React from 'react'
import { CssBaseline } from '@material-ui/core'
import {
  ThemeProvider,
  StylesProvider,
  jssPreset
} from '@material-ui/core/styles'
import { create } from 'jss'
import rtl from 'jss-rtl'
import theme from './theme/theme'
import MasterLayout from './screens/MasterLayout'
import { getDirection } from './localization'

const jss = create({ plugins: [...jssPreset().plugins, rtl()] })

function App() {
  return getDirection() === 'ltr' ? (
    <ThemeProvider theme={theme}>
      <StylesProvider>
        <CssBaseline />
        <MasterLayout />
      </StylesProvider>
    </ThemeProvider>
  ) : (
    <ThemeProvider theme={theme}>
      <StylesProvider jss={jss}>
        <CssBaseline />
        <MasterLayout />
      </StylesProvider>
    </ThemeProvider>
  )
}

export default App

// CssBaseline: padding hae k b sorate def khode
// materialUi mide ro hazf mikone
