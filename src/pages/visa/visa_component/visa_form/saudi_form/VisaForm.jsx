
import React, { useState } from 'react'
import { FormWrapper } from '../../../../flight/flight_booking/FlightBooking.style'
import { VisaInputAndDropDown, VisaInputContainer, VisaInputWrapper } from './VisaForm.style'
import { FaCcVisa } from 'react-icons/fa'

export default function VisaForm({handleShowSaudVisaForm, handleOtherVisaForm}) {
  
  return (
    <div>  
      <form> 
      <FormWrapper rounderBorder={''} pd={''}>
        <VisaInputContainer> 
            {/* takeoff input */}
            <VisaInputAndDropDown>
                <VisaInputWrapper  onClick={handleShowSaudVisaForm}>
                    <input type="text"  value={'Saudi Visa'} />
                <span><FaCcVisa/></span>                  
                </VisaInputWrapper>
            </VisaInputAndDropDown>
            <VisaInputAndDropDown>
                <VisaInputWrapper  onClick={handleOtherVisaForm}>
                    <input type="text"  value={'Other Visa'} />
                <span><FaCcVisa/></span>                  
                </VisaInputWrapper>
            </VisaInputAndDropDown>
          </VisaInputContainer>    
          </FormWrapper>
          </form>
    </div>
  )
}
