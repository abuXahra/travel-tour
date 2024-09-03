

import React, { useState } from 'react'
import himage from '../../../images/hotel-bg.png'
import { CardContent, CardImage, CardPrice, CardRating, CardSubTitle, CardTitle, FCardAdded, HotelCardWrapper, IoIosCheckmarkCircleStyled, SafeInfo } from './HotelCard.style'
import { MdOutlineFavorite } from 'react-icons/md'
import { GrFavorite } from 'react-icons/gr'

export default function HotelCard({imgUrl, title, subTitle, rating, reviewCount, price }) {

  const [favoriteColor, setFavoriteColor] = useState('#000000')

  const handleFavorite = () =>{
      if (favoriteColor === '#000000') {
        setFavoriteColor('#FF6805');
      }else if(favoriteColor === '#FF6805'){
        setFavoriteColor('#000000');
      }

  }
  return (
    <HotelCardWrapper>
        <CardImage bgImage={imgUrl} favoriteColor={favoriteColor}>
          <span onClick={handleFavorite}>
              <MdOutlineFavorite />
          </span>
          
          {/* Added to favorite card */}
          <FCardAdded onClick={()=>{}}>
            <div>Saved to: <b>My next trip</b> </div>
            <hr/>
            <div><IoIosCheckmarkCircleStyled /> My next trip</div>
          </FCardAdded>



        </CardImage>
        <CardContent>
            <CardTitle>
             <h4>{title}</h4>
            </CardTitle>
            <CardSubTitle>{subTitle}</CardSubTitle>
            <CardRating>
              <span>{rating}</span>
              Superb . {reviewCount} reviews
            </CardRating>
            <CardPrice>
              Starting from <b>NGN {price}</b>
            </CardPrice>
        </CardContent>

        {/* save info*/}
        <SafeInfo>
          Save
        </SafeInfo>
    </HotelCardWrapper>
  )
}



