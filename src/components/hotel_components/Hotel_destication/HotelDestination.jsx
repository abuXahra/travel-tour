import React from 'react'
import { HotelDestinationBackground, HotelDestinationCard, HotelDestinationOverlay, HotelDestinationTitle } from './HetelDesination.style'

export default function HotelDestination({imgUrl, title, bgHeight}) {
  return (
    <HotelDestinationCard bgHeight={bgHeight}>
      <HotelDestinationBackground bg={imgUrl} className="background" >
          <HotelDestinationOverlay>
            <HotelDestinationTitle className="title" style={{color:"white"}}>{title}</HotelDestinationTitle>
          </HotelDestinationOverlay>
      </HotelDestinationBackground>
  </HotelDestinationCard>
  )
}




