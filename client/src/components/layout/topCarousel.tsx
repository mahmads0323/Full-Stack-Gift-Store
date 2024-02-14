'use client'
import Carousel from '../reusable/carousel'
import SampleCarouselItem from '../reusable/sampleData/carouelItems'
import CrouselCard from '../reusable/crouselCard'

const TopCarousel = () => {
  return (
    <div className='mt-4 flex flex-col items-center text-base font-semibold '>
      <p className='my-4'>Gifts for everyone</p>
      <Carousel items={SampleCarouselItem} carouselType='simple' />
    </div>
  )
}

export default TopCarousel
