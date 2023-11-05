import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import SingaleproductionImage from './imageSlider/SingaleproductionImage';



export default function ImageSlider({ images }) {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      pagination={{ clickable: true }}
    >

      {images.map((val, key) => {
        return (
          <SwiperSlide key={key}>
            <SingaleproductionImage
              watchImg300={val}
              watchImg1200={val}
            />
          </SwiperSlide>
        );
      })}

    </Swiper>

  )
}
