import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
  return (
    <div className="relative bg-black">
        <div className="absolute w-full h-32 bg-gradient-to-t from-gray-50 to-transparent bottom-0 z-10"/>
      <Carousel
      autoPlay
      infiniteLoop
      interval={3000}
      showIndicators={false}
      swipeable={true}
      showStatus={false}
      showThumbs={false}
      >
                <div>
                    <img loading='lazy' src="https://links.papareact.com/gi1"/>
                </div>
                <div>
                    <img loading='lazy' src="https://links.papareact.com/6ff"/>
                </div>
                <div>
                    <img loading='lazy' src="https://links.papareact.com/7ma"/>
                </div>
            </Carousel>
    </div>
  )
}

export default Banner
