import React from 'react'
import { FlightType, RadioCheck, RadioItem, RadioItemWrapper } from './FlightRadioHeader.style'
import { FaCircle } from 'react-icons/fa'


export default function FlightRadioHeader({
    handleRoundTrip,
    rtBrColor,
    rtCheckColor,
    roundTrip,
    handleOneWay,
    owBrColor,
    owCheckColor,
    oneWay,
    handleMulticity,
    mcBrColor,
    mcCheckColor,
    multiCity
}) {
  return (
    <FlightType>
              <RadioItemWrapper onClick={handleRoundTrip}>
                <RadioItem brColor={rtBrColor}>
                  <RadioCheck checkColor={rtCheckColor}>
                    <FaCircle />
                  </RadioCheck>
                </RadioItem>
                <label>{roundTrip}</label>
              </RadioItemWrapper>
       

              <RadioItemWrapper onClick={handleOneWay}>
                <RadioItem brColor={owBrColor}>
                  <RadioCheck checkColor={owCheckColor}>
                    <FaCircle />
                  </RadioCheck>
                </RadioItem>
                <label>{oneWay}</label>
              </RadioItemWrapper>


              <RadioItemWrapper onClick={handleMulticity}>
                <RadioItem brColor={mcBrColor}>
                  <RadioCheck checkColor={mcCheckColor}>
                    <FaCircle />
                  </RadioCheck>
                </RadioItem>
                <label>{multiCity}</label>
              </RadioItemWrapper>
            </FlightType>
  )
}
