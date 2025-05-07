

import React from 'react'
import { BookingIconStyled } from './BookingIcons.style'

export default function BookingIcons({title, onClickFunc, Icon, headerBg, bottomBorder, textColor }) {

  return (
    <BookingIconStyled onClick={onClickFunc} textColor={textColor} headerBg={headerBg} bd={bottomBorder}>
       {Icon}
        <p>{title}</p>
    </BookingIconStyled>
  )
}
