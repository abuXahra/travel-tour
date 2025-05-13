
import React from 'react'
import { FlightClassWrapper } from './FlightClass.style'

export default function FlightClass({ isChecked, value, name, onChange}) {
  return (
    <FlightClassWrapper>
        <label for={value}>{value}</label>
        <div><input type="radio" name={name} value={value} checked ={isChecked} onChange={onChange} /></div>
        
  </FlightClassWrapper>
  )
}
