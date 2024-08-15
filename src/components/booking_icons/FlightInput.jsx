
import React from 'react'
import { ErrorMessage, FlightInputWrapper, Label } from './FlightInput.style'

export default function FlightInput({title, value, error, onChange, InputWidth, type, maxLength, label, bt, lf}) {
  return (
    <FlightInputWrapper  contWidth={InputWidth} bt={bt} lf={lf}>
    <input
       type={type} 
       placeholder={title} 
       value={value}
       onChange={onChange}
       maxLength={maxLength}
    />
    <Label>{label}</Label>
      {error? <ErrorMessage>{title} required</ErrorMessage> : ''}
    </FlightInputWrapper>
  )
}
