import React from 'react'
import { CheckboxContent, CheckboxWrapper } from './Checkbox.style'
import { ErrorMessage } from '../../../pages/taxi/taxi_overview/TaxiOverview.style'

export default function Checkbox({checkboxId, isChecked, handleCheckboxChange, checkboxMessage, isValid }) {
  return (
    <CheckboxWrapper>   
        <CheckboxContent>
            <input
            type="checkbox"
            id={checkboxId}
            checked={isChecked}
            onChange={handleCheckboxChange}
            
            />
            {/* <span>*</span> */}
            {/* options */}
            <p>{checkboxMessage}</p>
         </CheckboxContent>

         {isValid ? (
        <ErrorMessage>You must agree to the terms and conditions.</ErrorMessage> 
        ): ''}
    </CheckboxWrapper>

  )
}
