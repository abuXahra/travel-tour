import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { hotelList } from "../../../../data/object/hotelList";

import { useNavigate } from "react-router-dom";
import { NextCustomArrow, PrevCustomArrow, SliderWrapper } from "./FlightSlider.style";
import { FlightPackageList } from "../../../../data/object/flight_packagaes/FlightPackages";
import FlightPackage from "../FlightPackage";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";





export default function FlightSlide() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768, // Mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const navigate = useNavigate()


  return (
    <SliderWrapper>
    <Slider {...settings} >
    {
    FlightPackageList.map((item, i)=>(
                      <FlightPackage 
                        key={i} 
                        imgUrl={item.imgUrl}
                        title={item.title}
                        flightClass={item.flightClass}
                        flightPrice={item.flightPrice}
                        departDate={item.departDate}
                        returnDate={item.returnDate}
                        exploreUrl={item.exploreUrl}
                        scaling={'none'}
                        onClick={()=>navigate(item.flightUrl)}
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