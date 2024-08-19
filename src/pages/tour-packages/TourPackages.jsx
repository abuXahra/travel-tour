
import React, { useRef } from 'react'
import HeroSection from '../../components/hero/HeroSection'
import { TourPackagesItems, TourSection, TourSectionTitle, TourWrapper } from './TourPackages.style'
import heroImage from '../../images/dubai.png'
import { FaChevronRight, FaLongArrowAltDown } from 'react-icons/fa'
import Button from '../../components/button/Button'
import { BodyContent } from '../flight/flight_booking/FlightBooking.style'
import PackageCard from './components/PackageCard'
import { ButtonWrapper } from '../flight/dubai_holiday/DubaiHoliday.style'
import { TourPackagesList } from '../../data/object/TourPackages'

export default function TourPackages() {


       // CLICK AND SCROLL TO General Reservation conditions
   const bodyRef = useRef(null);
  
   const handleBodyRef = (sectionRef) => {
     if (sectionRef.current) {
       sectionRef.current.scrollIntoView({ behavior: 'smooth' });
     }
   }

  return (
    <TourWrapper>
        <HeroSection heroImage={heroImage}>
            <TourSection>
                <TourSectionTitle>
                    <h4>Travel & Tour packages</h4>
                    <h1>Choose from Manzo exlusive tour packages</h1>
                   <span><Button onClick={()=>handleBodyRef(bodyRef)} text={'Learn more'} rightIcon={<FaLongArrowAltDown />} bgColor={'transparent'} btnBorder={'2px solid white'}/></span>   
                </TourSectionTitle>
            </TourSection>
        </HeroSection>

        <BodyContent ref={bodyRef}> 

       <h2>Exclusive Tour destinations</h2>
        <p>
            Escape to sunny shores or immerse in city life in your favourite destinations. Take advantage of great offers on flights plus hotel packages.
        </p>
            <TourPackagesItems>
                {TourPackagesList.map((item, i)=>(
                    <PackageCard
                        title={item.title}
                        price={item.price}
                        imgUrl={item.imgUrl}
                        onClick={item.onClick}
                    />
                ))}
            </TourPackagesItems>
            <ButtonWrapper justify={'flex-end'}><span><Button text={'More Packages'} rightIcon={<FaChevronRight/>} onClick={()=>{}}/></span></ButtonWrapper>
            
        </BodyContent>

    </TourWrapper>
  )
}
