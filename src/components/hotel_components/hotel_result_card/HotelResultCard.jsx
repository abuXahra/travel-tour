
import React, { useState } from 'react'
import { MdOutlineFavorite } from 'react-icons/md';
import { Breakfast, ButtonStyle, LocationContainer, ResultCard, ResultCardBody, ResultCardImage, ResultContent, ResultContentLeft, ResultContentRight, ResultState } from './HotelResultCard.style';
import cardImage from '../../../images/hotel-bg.png'
import { FaLongArrowAltRight } from 'react-icons/fa';


export default function HotelResultCard({
    picture, title, location, 
    googleMapLink, distance,locationLink,
    recommended, type, property, bedrooms, 
    livingRooms, bathrooms, kitchen, dimension, 
    bedding, cancellation, grade, reviewCount, 
    checkingDate, checkoutDate, rating, nights, adults, child, price ,
    handleButtonClick
}) {
    
    const [favoriteColor, setFavoriteColor] = useState('#000000')

    const handleFavorite = () =>{
        if (favoriteColor === '#000000') {
          setFavoriteColor('#FF6805');
        }else if(favoriteColor === '#FF6805'){
          setFavoriteColor('#000000');
        }
  
    }

  return (
    <ResultCard>
        {/* <ResultCardContent> */}

            {/* imageWraper */}
            <ResultCardImage bgImage={picture} favoriteColor={favoriteColor} className='hov'>
                    <span onClick={handleFavorite}>
                    <MdOutlineFavorite />
                    </span>
    
            </ResultCardImage>
            
            {/*content  */}
            <ResultCardBody>
                <ResultContent>
                    <ResultContentLeft>
                        <h3>{title}</h3>
                        <LocationContainer><a href={locationLink}>{location}</a> <a href={googleMapLink}>Show on map</a> {distance}km from center</LocationContainer>
                    </ResultContentLeft>
                    <ResultContentRight>
                        <ResultState>
                            <span>
                                <b>{grade}</b> {reviewCount} reviews 
                             </span>
                            <div>
                                {rating}
                            </div>
                        </ResultState>
                    </ResultContentRight>
                </ResultContent>
                <ResultContent>
                    <ResultContentLeft>
                       <span>
                        <div>{recommended}</div>
                       </span>
                       <b>{type}</b>
                       <p>
                            {property? property:" "} 
                            {bedrooms? " . "+ bedrooms:""}  
                            {livingRooms? " . " + livingRooms:""}
                            {bathrooms? " . " + bathrooms:""}  
                            {kitchen? " . " + kitchen:""}  
                            {dimension? " . " + dimension:""}
                        </p>
                       <p>{nights}, {adults}, {child}</p>
                       <p style={{color: 'green'}}>{cancellation}</p>
                    </ResultContentLeft>
                    <ResultContentRight>
                            <span>
                               <div>{checkingDate} - {checkoutDate}</div>
                            </span> 
                            <p>{bedding}</p>
                            <span style={{color: '#0D3984'}}><b>NGN {price}</b></span>
                            <p>Includes taxes and charges</p>
                          
                            <ButtonStyle onClick={handleButtonClick}>See Availability  <FaLongArrowAltRight /></ButtonStyle>
                    </ResultContentRight>
                </ResultContent>
            </ResultCardBody>
        {/* </ResultCardContent> */}
    </ResultCard>
  )
}




                    
{/* <span>Recommended for your group </span>
<div>
 <b>Two-Bedroom Apartment</b>
 <span>Entire Apartment . 2 bedrooms . 1 living room . 3 bath rooms . 1 kitchen . 3oomsq</span>   
 <span>3 beds (1 extra-large double, 1 sofa bed 1 large double)</span>
 <span>Free concellation</span>
</div> */}