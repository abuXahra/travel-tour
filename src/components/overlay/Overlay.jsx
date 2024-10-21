
import React from 'react'
import { CloseIcon, OverlayButton, OverlayCard, OverlayWrapper } from './Overlay.style'
import { FaTimes } from 'react-icons/fa'
import Button from '../button/Button'

export default function Overlay({children, contentHight, contentWidth, overlayButtonClick, closeOverlayOnClick, text1, text2}) {
  return (
    <OverlayWrapper>
      <OverlayCard contentHight={contentHight} contentWidth={contentWidth}>
     {/* close icon */}
      <CloseIcon ><span onClick={closeOverlayOnClick}><FaTimes/></span></CloseIcon>
          
          {/* Overlay content */}
          {children}

          {/* Overlay buttons */}
          <OverlayButton>
              <Button 
                bgColor={'#0D3984'}
                text={text1}
                pd={'10px 20px'}
                onClick={overlayButtonClick}
              />
              
              <Button 
                bgColor={'black'}
                text={text2}
                pd={'10px 20px'}
                onClick={closeOverlayOnClick}
              />
          </OverlayButton>
      </OverlayCard>
    </OverlayWrapper>
  )
}
