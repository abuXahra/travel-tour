

import React from 'react'
import { ButtonStyle } from './Button.style'

export default function Button({onClick, text,  textColor, bgColor, btnBorder, Icon, rightIcon}) {
  return (
    <ButtonStyle textColor={textColor} bgColor={bgColor} btnBorder={btnBorder} type='submit' onClick={onClick}>
       {Icon} {text} {rightIcon && rightIcon}
    </ButtonStyle>
  )
}
