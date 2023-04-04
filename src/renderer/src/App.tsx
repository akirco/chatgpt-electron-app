import '@renderer/assets/styles/layout.scss'
import LeftPanel from './components/leftpanel'
import Main from './components/mainpanel'
import TitleBar from './components/titlebar'
import Layout from './layout'

function App() {
  return (
    <>
      <Layout type={'left'} style={{ background: '#212128', borderRight: '1px solid #1e1f21' }}>
        <Layout type={'bar'} draggable></Layout>
        <LeftPanel />
      </Layout>
      <Layout type={'right'}>
        <Layout type={'bar'}>
          <TitleBar />
        </Layout>
        <Layout type={'main'}>
          <Main />
        </Layout>
      </Layout>
    </>
  )
}

export default App
