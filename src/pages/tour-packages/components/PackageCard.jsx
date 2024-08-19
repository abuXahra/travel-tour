

import React from 'react'
import { Explore, PackageContent, PackagePrice, TourPackageBackground, TourPackageCard, TourPackageOverlay, TourPackageTitle } from './PackageCard.style'
import Button from '../../../components/button/Button'
import { FaChevronRight } from 'react-icons/fa'


export default function PackageCard({
    title, price, imgUrl, onClick
}) {
  return (

         <TourPackageCard bgHeight={''} scaling={''}>
            <TourPackageBackground bg={imgUrl} className="background" >
                <TourPackageOverlay>
                    
                </TourPackageOverlay>
            </TourPackageBackground>
            <PackageContent>
                <h3>{title}</h3>     
                <TourPackageTitle> <p><b>{'starting from '}</b> <b>NGN {price}</b></p></TourPackageTitle> 
                <span><Button text={'Book now'} rightIcon={<FaChevronRight/>} onClick={onClick}/></span>
            </PackageContent>
</TourPackageCard>

  )
}

