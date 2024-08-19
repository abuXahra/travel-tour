

import React from 'react'
import { Explore, PackageContent, PackagePrice, TourPackageBackground, TourPackageCard, TourPackageOverlay, TourPackageTitle } from './PackageCard.style'
import Button from '../../../components/button/Button'
import { FaChevronRight } from 'react-icons/fa'
import imgUrl from '../../../images/hotels/dubaiStarHotels/JA-Hatta-Fort-Hotel.jpg'

export default function PackageCard() {
  return (

         <TourPackageCard bgHeight={''} scaling={''}>
            <TourPackageBackground bg={imgUrl} className="background" >
                <TourPackageOverlay>
                    
                </TourPackageOverlay>
            </TourPackageBackground>
            <PackageContent>
                <h3>{'Holiday in Qatar'}</h3>     
                <TourPackageTitle> <p><b>{'starting from '}</b> <b>NGN {'650,00.00'}</b></p></TourPackageTitle> 
                <span><Button text={'Book now'} rightIcon={<FaChevronRight/>} onClick={()=>{}}/></span>
            </PackageContent>
</TourPackageCard>

  )
}

