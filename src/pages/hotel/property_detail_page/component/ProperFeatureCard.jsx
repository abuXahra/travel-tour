

import React from 'react'
import { FaChair } from 'react-icons/fa'
import { CardWrapper } from './ProperFeatureCard.style'

export default function ProperFeatureCard({title, Icon, border}) {
  return (
    <CardWrapper bder={border}>
      <span>  {Icon}</span>
        {title}
    </CardWrapper>
  )
}
