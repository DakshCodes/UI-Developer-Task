import React from 'react'
import '../src/Styles/app.scss'
import Sidenav from './Components/Sidenav/Sidenav'
import MainLayout from './Layouts/MainLayout/MainLayout'
import Home from './Pages/Home/Home'

const App = () => {
  return (
    <div className='dashboard'>
      {/* SideNav Is Fixed */}
      <Sidenav />

      {/* Routes */}

      {/* Home Route */}
      <MainLayout>
        <Home />
      </MainLayout>
    </div>
  )
}

export default App
