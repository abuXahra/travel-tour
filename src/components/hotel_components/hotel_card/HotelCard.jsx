

import React, { useEffect, useRef, useState } from 'react'
import himage from '../../../images/hotel-bg.png'
import { CardContent, CardImage, CardPrice, CardRating, CardSubTitle, CardTitle, FCardAdded, HotelCardWrapper, IoIosCheckmarkCircleStyled, SafeInfo } from './HotelCard.style'
import { MdOutlineFavorite } from 'react-icons/md'
import { GrFavorite } from 'react-icons/gr'
import { useNavigate } from 'react-router-dom'

export default function HotelCard({imgUrl, title, subTitle, rating, reviewCount, price }) {

    // showAddToFavorite
    const [showAddToFavorite, setShowAddToFavorite] = useState(false)

    // showRemoveFromFavorite
    const [showRemoveFromFavorite, setShowRemoveFromFavorite] = useState(false)

   
    // showSave
    const [showSave, setShowSave] = useState(false)

  // handle favorite
  const [favoriteColor, setFavoriteColor] = useState('#000000')
  const handleFavorite = () =>{
   
      if (favoriteColor === '#000000') {
        setShowAddToFavorite(true)
        setShowRemoveFromFavorite(false)
        setFavoriteColor('#FF6805');
      }else if(favoriteColor === '#FF6805'){
        setShowAddToFavorite(false)
        setShowRemoveFromFavorite(true)
        setFavoriteColor('#000000');
      }else{
        setShowRemoveFromFavorite(false)
        setShowAddToFavorite(false)
      }

  }
  


  const navigate = useNavigate()

  // Ref to detect clicks outside of the component
    const cardRef = useRef(null);
  
  // Effect to handle clicks outside the component
  useEffect(() => {
    function handleClickOutside(event) {
        if (cardRef.current && !cardRef.current.contains(event.target)) {
            setShowAddToFavorite(false);
            setShowRemoveFromFavorite(false);
        }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
}, []);


  return (
    <HotelCardWrapper ref={cardRef}>
        <CardImage bgImage={imgUrl} favoriteColor={favoriteColor}>
          <span onClick={handleFavorite}  onMouseEnter={()=>setShowSave(true)} onMouseLeave={()=>setShowSave(false)}>
              <MdOutlineFavorite />
          </span>
          
          {/* Added to favorite card */}
{     showAddToFavorite &&     
          <FCardAdded onClick={()=>{navigate('/favourite-hotels')}}>
            <div>Saved to: <b>My next trip</b> </div>
            <hr/>
            <div><IoIosCheckmarkCircleStyled /> My next trip</div>
          </FCardAdded>}

    {/* Remove From Favorite card */}
          {showRemoveFromFavorite &&     
          <FCardAdded>
            <div>Removes from: <b>My next trip</b> </div>
          </FCardAdded>}



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
  {     showSave &&   
        <SafeInfo>
          Save
        </SafeInfo>}
    </HotelCardWrapper>
  )
}



