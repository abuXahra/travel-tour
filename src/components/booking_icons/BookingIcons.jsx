

import React from 'react'
import { BookingIconStyled } from './BookingIcons.style'

export default function BookingIcons({title, link, Icon, headerBg, bottomBorder }) {

  return (
    <BookingIconStyled href={link} headerBg={headerBg} bd={bottomBorder}>
        {Icon}
        <p>{title}</p>
    </BookingIconStyled>
  )
}
