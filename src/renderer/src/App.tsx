import TitleBar from '@render/components/titlebar'
import { Route, Routes } from 'react-router-dom'
import Landing from '@render/views/landing'
import { Global, css } from '@emotion/react'
import Space from '@render/views/space'

function App() {
  return (
    <>
      <Global
        styles={css`
          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          }
          html,
          body,
          #root {
            width: 100%;
            height: 100%;
          }
        `}
      />
      <TitleBar />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/space" element={<Space />}></Route>
      </Routes>
    </>
  )
}

export default App
