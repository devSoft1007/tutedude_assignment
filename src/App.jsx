import { useState } from 'react'
import Header from './components/Header/Header'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './Layout/Layout'
import ReferEarn from './pages/ReferEarn/ReferEarn'
import ReferEarn2 from './pages/ReferEarn2/ReferEarn2'

function App() {
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <div>
        <Header />
        <Layout>
          {
            toggle ? 
            <ReferEarn2 setToggle={setToggle} />
            :
            <ReferEarn setToggle={setToggle} />

          }
        </Layout>
      </div>
    </>
  )
}

export default App
