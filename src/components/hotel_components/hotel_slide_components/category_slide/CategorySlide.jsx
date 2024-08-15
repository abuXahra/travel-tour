

import React, { useEffect, useRef } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { NextCustomArrow, PrevCustomArrow, SliderWrapper } from '../hotel_slider/HotelSlide.style';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import { hotelList } from '../../../../data/object/hotelList';
import HotelCard from '../../hotel_card/HotelCard';

export default function CategorySlide() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768, // Mobile devices
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };


      

  return (
    <SliderWrapper>
    <Slider {...settings} >
    {
    hotelList.map((item, i)=>(
                      <HotelCard 
                        key={i} 
                        imgUrl={item.imgUrl}
                        title={item.title}
                        subTitle={item.subTitle}
                        rating={item.rating}
                        reviewCount={item.reviewCount}
                        price={item.price}
                      />         
                    ))
                  } 
    </Slider>
</SliderWrapper> 
  )
}



const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <NextCustomArrow onClick={onClick}>
      <MdArrowForwardIos />
    </NextCustomArrow>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <PrevCustomArrow  onClick={onClick}>
      <MdArrowBackIosNew />
    </PrevCustomArrow>
  );
};