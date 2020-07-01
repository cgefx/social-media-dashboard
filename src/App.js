import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, lightTheme, darkTheme } from './style'
import { Dashboard, AppBar } from './components'
import { useData, useDarkMode } from './hooks'

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode()
  const { overviewData, followerData, totalFollowers } = useData()

  const themeMode = theme === 'light' ? lightTheme : darkTheme

  //The default theme is loaded first and then checks local storage.
  //If a different one is found some flicker can happen.
  //This check blocks the app from loading until theme checking is done.
  if (!componentMounted) {
    return <div />
  }

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <AppBar
          theme={theme}
          toggleTheme={toggleTheme}
          total={totalFollowers}
        />
        <Dashboard followers={followerData} overview={overviewData} />
      </>
    </ThemeProvider>
  )
}

export default App
