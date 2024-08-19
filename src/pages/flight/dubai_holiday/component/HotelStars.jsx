
import React from 'react'
import { HotelStarsContent, HotelStarsPicture, HotelStarsWrapper } from './HotelStars.style'
import bgImg from '../../../../images/hotels/proxy-image3.jpg'

export default function HotelStars({
    hotelClass,
    hotelDescr,
    hotelPrice,
    hotelImgUrl,
    rwRvs,
    cl
}) {
  return (
    <HotelStarsWrapper rwRvs={rwRvs} cl={cl}>
        <HotelStarsContent>
            <h2>{hotelClass}</h2>
            {hotelDescr}

            <ul>
              {hotelPrice && hotelPrice.map((item, j)=>(
                <li>{item}</li>
              ))}
            </ul>
        </HotelStarsContent>
        <HotelStarsPicture bgImg={hotelImgUrl}>

        </HotelStarsPicture>
    </HotelStarsWrapper>
  )
}
