import React from 'react'
import AuctionSection from '../../Components/AuctionSection/AuctionSection'
import Header from '../../Components/HeaderHome/Header'
import SearchTab from '../../Components/SearchTab/SearchTab'
import Slider from '../../Components/Slider/Slider'
import Tabbar from '../../Components/TabBar/Tabbar'
import Divider from '../../Components/Ui/Divider'
import Wallet from '../../Components/Wallet/Wallet'

const Home = () => {
  return (
    <div className='home-main'>
      {/* header */}
      <Header />

      {/* main */}
      <div className="popular-section"> 
        <AuctionSection />
        <Wallet />
      </div> 
      <div className="tabs-section">
        <Tabbar />
        <Divider />
        <Slider />
      </div>
      <div className="search-section">
        <SearchTab />
      </div>
    </div>
  )
}

export default Home
