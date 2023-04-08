import LeftPanel from './components/leftpanel'
import Main from './components/mainpanel'
import TitleBar from './components/titlebar'
import Box from './layout/box'

function App() {
  return (
    <>
      <Box type={'left'} className={`leftPanel`}>
        <Box type={'bar'} draggable></Box>
        <LeftPanel />
      </Box>
      <Box type={'right'}>
        <Box type={'bar'} className={`rightTopBar`}>
          <TitleBar />
        </Box>
        <Box type={'main'}>
          <Main />
        </Box>
      </Box>
    </>
  )
}

export default App
