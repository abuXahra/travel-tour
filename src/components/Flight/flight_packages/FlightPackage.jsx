import React, { useState } from 'react'
import { Explore, FlightPackageBackground, FlightPackageCard, FlightPackageOverlay, FlightPackageTitle, PackageContent, PackagePrice } from './FlightPackage.style'
import bg from '../../../images/hotels/proxy-image2.jpg'
import Button from '../../button/Button'
import { FaChevronRight } from 'react-icons/fa'

export default function FlightPackage({
  bgHeight, 
  imgUrl, 
  title, 
  flightClass, 
  flightPrice, 
  departDate, 
  returnDate, 
  exploreUrl,
  onClick
}) {


  return (
    <FlightPackageCard bgHeight={bgHeight} scaling='none'>
    <FlightPackageBackground bg={imgUrl} className="background" >
        <FlightPackageOverlay>
            <PackageContent className="title">
            <h3>{title}</h3>     
               <FlightPackageTitle> <p><b>{flightClass}</b></p> <p><b>NGN {flightPrice}</b></p></FlightPackageTitle>      
                <PackagePrice className="show-price">
                    <FlightPackageTitle> 
                      <p>{departDate} -  {returnDate}</p> 
                      <Explore><a href={exploreUrl}>Explore</a></Explore>
                    </FlightPackageTitle>
                    <Button text={'Book now'} rightIcon={<FaChevronRight/>} onClick={onClick}/>
                </PackagePrice>

            </PackageContent>
        </FlightPackageOverlay>
    </FlightPackageBackground>
</FlightPackageCard>
  )
}
