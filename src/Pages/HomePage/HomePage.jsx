import React from 'react'
import HomeVideo from '../../Components/HomeVideo/HomeVideo'
import HomeVideo2 from '../../Components/HomeVideo/HomeVideo2'
import Shoes from "../../Components/Shoes/Shoes";
import TwoImage from '../../Components/TwoImage/TwoImage';
import ForImage from '../../Components/ForImage/ForImage';
import Slider from '../../Components/Slider/Slider';


function HomePage() {
  return (
    <div className='homepage'>
      <HomeVideo />
      <Shoes />
      <TwoImage />
      <ForImage />
      <HomeVideo2 />
      <Slider />
      
    </div> 
  )
}

export default HomePage
