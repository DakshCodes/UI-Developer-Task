import React, { useEffect, useState } from 'react'
import '../src/Styles/app.scss'
import PreLoader from './Components/PreLoader/PreLoader'
import Sidenav from './Components/Sidenav/Sidenav'
import MainLayout from './Layouts/MainLayout/MainLayout'
import Lenis from '@studio-freight/lenis'
import Home from './Pages/Home/Home'

const App = () => {
  const [loading, setloading] = useState(true)
  setTimeout(() => { setloading(false) }, 3000)

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

  }, []);

  return (
    <div id='main'>
      {loading && <PreLoader />}
      {/* SideNav Is Fixed */}
      <Sidenav />
      
      {/* Routes */}
      {/* Home Route */}
      <MainLayout>
        <Home />
      </MainLayout>
    </div>
    // </div>
  )
}

export default App
