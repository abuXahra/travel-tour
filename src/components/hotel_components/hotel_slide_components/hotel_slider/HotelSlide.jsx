
import React from 'react'

import HotelCategory from '../../hotel_form/hotel_form/hotel_form/hotel_category/HotelCategory';
import { hotelCategories } from '../../../../data/object/HotelCategory';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { NextCustomArrow, PrevCustomArrow, SliderWrapper } from './HotelSlide.style';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';

export default function HotelSlide() {

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
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
      <Slider {...settings}>
          {
                hotelCategories.map((item, i)=>(
                  <HotelCategory 
                    key={i} 
                    url={item.url}
                    imgUrl={item.imgUrl}
                    title={item.title}
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