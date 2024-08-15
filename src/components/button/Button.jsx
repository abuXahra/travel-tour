

import React from 'react'
import { ButtonStyle } from './Button.style'

export default function Button({onClick, text,  textColor, bgColor, btnBorder, Icon}) {
  return (
    <ButtonStyle textColor={textColor} bgColor={bgColor} btnBorder={btnBorder} type='submit' onClick={onClick}>
       {Icon} {text}
    </ButtonStyle>
  )
}
