

import React from 'react'
import { BookingIconStyled } from './BookingIcons.style'

export default function BookingIcons({title, onClickFunc, Icon, headerBg, bottomBorder }) {

  return (
    <BookingIconStyled onClick={onClickFunc} headerBg={headerBg} bd={bottomBorder}>
       {Icon}
        <p>{title}</p>
    </BookingIconStyled>
  )
}
