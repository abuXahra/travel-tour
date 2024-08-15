
import React from 'react'
import { UserVisaDataContent, UserVisaDataWrapper, VisaData, VisaDataImg } from './UserVisaData.style'
import passport from '../../images/pasport.jpg'
import Button from '../button/Button'
import { ButtonWrapper } from '../../pages/flight/flight_customization/FlightCustomization.style'

export default function UserVisaData({
    name,selectedCountryValue, dob, 
    visaType, entryType, visaNo, issueDate, 
    expDate, passportNo, placeIssued, duration, handleButtonClick}) {
  return (
    <UserVisaDataWrapper>
        <UserVisaDataContent>
            <VisaDataImg>
                <img src={passport } alt="" srcset="" /> 
                <div>
                    <div>
                        <span>Name: </span> <span>{name}</span> 
                    </div>
                    <div>
                        <span>  Nationality: </span> <span>{selectedCountryValue}</span>
                    </div>
                    <div>
                        <span>  Date of Birth: </span> <span>{dob}</span>
                    </div>
                    <div>
                        <span>  Visa Type: </span> <span>{visaType}</span>
                    </div>                    
                    <div>
                        <span>  Entry Type: </span> <span>{entryType}</span>
                    </div>
                    <div>
                        <span>  Visa Number </span> <span>{visaNo}</span>
                    </div>                    
                    <div>
                        <span>  Issue Date </span> <span>{issueDate}</span>
                    </div>
                    <div>
                        <span>  Expiry Date </span> <span>{expDate}</span>
                    </div>
            
                    <div>
                        <span>  Passport Number </span> <span>{passportNo}</span>
                    </div>

                    
                    <div>
                        <span>  Place Issued </span> <span>{placeIssued}</span>
                    </div>
                                   
                    <div>
                        <span>  Duration: </span> <span>{duration}</span>
                    </div>
                </div>
            </VisaDataImg>
        </UserVisaDataContent>
        <ButtonWrapper spbcBtwn={'flex-end'}><Button text={'Sumbit'} Icon={''} onClick={handleButtonClick}/></ButtonWrapper>
    </UserVisaDataWrapper>
  )
}
