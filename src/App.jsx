import React, { useEffect, useState } from 'react'
import '../src/Styles/app.scss'
import PreLoader from './Components/PreLoader/PreLoader'
import Sidenav from './Components/Sidenav/Sidenav'
import MainLayout from './Layouts/MainLayout/MainLayout'
import Lenis from '@studio-freight/lenis'
import Home from './Pages/Home/Home'
import MobileNav from './Components/MobileNav/MobileNav'
import Featured from './Components/Featured/Featured'

const App = () => {
  const [loading, setloading] = useState(true)
  const [mobileNavActive, setmobileNavActive] = useState(false)
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
    <>
      {loading && <PreLoader />}
      {/* for mobile devices */}
      <MobileNav mobileNavActive={mobileNavActive} setmobileNavActive={setmobileNavActive} />

      <div id='main'>
        {/* SideNav Is Fixed */}
        <Sidenav />
        {/* Routes */}
        {/* Home Route */}
        <MainLayout>
          <Home mobileNavActive={mobileNavActive} setmobileNavActive={setmobileNavActive} />
        </MainLayout>
      </div>
    </>
  )
}

export default App
