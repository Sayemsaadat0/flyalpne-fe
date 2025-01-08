import React from 'react'
import HeroSection from './HeroSection'
import HomeCategorySection from './HomeCategorySection'
import NewArrivalSection from './NewArrivalSection'
import FirstAddSection from './FirstAddSection'
import OfferSection from './OfferSection'
import TrendingProducts from './TrendingProducts'
import SecondAddSection from './SecondAddSection'
import BlogSection from './BlogSection'
import TopBrands from './TopBrands'

const HomeContainer = () => {
  return (
    <div className=" space-y-[40px] md:space-y-[80px]">
      <div className='fly-commonContainer'>
        <HeroSection />
      </div>
      <div className='fly-commonContainer'>
        <HomeCategorySection />
      </div>
      <div className=''>
        <OfferSection />
      </div>

      <div className='fly-commonContainer'>
        <TopBrands />
      </div>
      <div className='fly-commonContainer'>
        <FirstAddSection />
      </div>


      <div className='fly-commonContainer'>
        <TrendingProducts />
      </div>
      <div className='fly-commonContainer'>
        <SecondAddSection />
      </div>
      <div className=''>
        <NewArrivalSection />
      </div>
      <div className='pb-10 md:pb-[80px] fly-commonContainer'>
        <BlogSection />
      </div>
    </div>
  )
}

export default HomeContainer