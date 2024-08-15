
import React from 'react'
import { PassengerButton, PassengerDataWrapper, PassengerTitle } from './PassengerData.style'

export default function PassengerData({title, Subtitle, value, reduceFunc, addFunc }) {
  return (
    <PassengerDataWrapper>
        <PassengerTitle>
            <strong>{title}</strong>
            <span>{Subtitle}</span>
        </PassengerTitle>
        <PassengerButton>
            <div onClick={reduceFunc}>-</div>
            <span>{value}</span>
            <div onClick={addFunc}>+</div>
        </PassengerButton>
</PassengerDataWrapper>

  )
}
