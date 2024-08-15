
import React, { useState } from 'react'
import { MdOutlineFavorite } from 'react-icons/md';
import { FaLongArrowAltRight, FaVectorSquare } from 'react-icons/fa';
import { ButtonStyle, ResultCard, ResultCardBody, ResultCardImage, ResultContent, ResultContentLeft, ResultContentRight, ResultState } from './TaxiResultCard.style';
import cab from '../../../images/cab.png'
import { FaPeopleGroup } from 'react-icons/fa6';


export default function TaxiResultCard({
    picture, title, recommended, taxiPolicies,
    refunds, cancellation, cancellationFee, pickupDate,
    pickupTime, NoOfPassenger, AirCondition, grade,
    reviewCounter, rating, price, taxes, taxiLink,
    displayButton
}) {
    
    const [favoriteColor, setFavoriteColor] = useState('#000000')



  return (
    <ResultCard>
        {/* <ResultCardContent> */}

            {/* imageWraper */}
            <ResultCardImage bgImage={picture} favoriteColor={favoriteColor}>
                        
            </ResultCardImage>
            
            {/*content  */}
            <ResultCardBody>
                <ResultContent>
                    <ResultContentLeft>
                        <h2>{title}</h2>
                    </ResultContentLeft>
                    <ResultContentRight>
                        <ResultState>
                            <span>
                                <b>{grade}</b> {reviewCounter} reviews 
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
                       <b>{taxiPolicies}</b>
                       <p>
                            {refunds}
                        </p>
                       <p>{cancellation}</p>
                       <p style={{color: 'green'}}>{cancellationFee}</p>
                    </ResultContentLeft>
                    <ResultContentRight>
                            <span>
                               <div>{pickupDate}, {pickupTime}</div>
                            </span> 
                            <p><FaPeopleGroup />  {NoOfPassenger} </p>
                            <p><FaVectorSquare /> {AirCondition}</p>
                            <span style={{color: '#0D3984'}}><b>NGN {price}</b></span>
                            <p>{taxes}</p>
                          
                            <ButtonStyle displayButton={displayButton} onClick={taxiLink}>Book <FaLongArrowAltRight /></ButtonStyle>
                    </ResultContentRight>
                </ResultContent>
            </ResultCardBody>
        {/* </ResultCardContent> */}
    </ResultCard>
  )
}
