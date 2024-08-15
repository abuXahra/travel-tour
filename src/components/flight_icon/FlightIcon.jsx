
import React from 'react'
import { MdFlightStyled } from './FlightIcon.style'
import { MdFlight } from 'react-icons/md'

export default function FlightIcon({rotate, iconColor, IconSize, Icon}) {
  return <MdFlightStyled rotateIcon={rotate} IconColor={iconColor} IconSize={IconSize}>{Icon? Icon : <MdFlight/>}</MdFlightStyled>
}
