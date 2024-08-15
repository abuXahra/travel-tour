
import React from 'react'
import { FlightClassWrapper } from './FlightClass.style'

export default function FlightClass({ isChecked, value, name, onChange}) {
  return (
    <FlightClassWrapper>
        <label for={value}><strong>{value}</strong></label>
        <input type="radio" name={name} value={value} checked ={isChecked} onChange={onChange} />
  </FlightClassWrapper>
  )
}
