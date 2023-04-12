import { darkTheme, lightTheme } from '@renderer/utils/theme'
import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import TitleBar from './components/titlebar'
import Landing from './views/landing'
import Space from './views/space'

function App() {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <TitleBar />
        <Routes>
          <Route path="/" element={<Landing toggleTheme={toggleTheme} />}></Route>
          <Route path="/space" element={<Space />}></Route>
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
