import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import Image from 'next/image'

const Slider = ({ slides }) => {
  // console.log(slides)

  return (
    <div className="slider">
      <Swiper
        style={{
          '--swiper-navigation-color': '#888aff',
          '--swiper-pagination-color': '#888aff',
        }}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="swiper-container"
      >
        {slides.map((slide, index) => (
          <SwiperSlide className="slider__img" key={index}>
            <Image
              src={slide.src}
              alt="Image"
              // width={500}
              // height={500}
              // layout="responsive"
              fill
              sizes="100vw"
              style={{ objectFit: 'contain' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider
