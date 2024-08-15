
import React from 'react'
import { HeroOverlay, HeroWrapper } from './HeroSection.style'

export default function HeroSection({children, heroImage}) {
  return (
    <HeroWrapper heroImage={heroImage}>
        <HeroOverlay>
          {children}
        </HeroOverlay>
      </HeroWrapper>
  )
}
