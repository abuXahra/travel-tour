
import React from 'react'
import { CloseIcon, OverlayButton, OverlayCard, OverlayWrapper } from './Overlay.style'
import { FaTimes } from 'react-icons/fa'
import Button from '../button/Button'

export default function Overlay({children, contentHight, contentWidth, overlayButtonClick, closeOverlayOnClick, text1, text2, btnDisplay1, btnDisplay2, modalHeight }) {
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
                bgColor={'#FF6805'}
                text={text1}
                pd={'10px 20px'}
                onClick={overlayButtonClick}
                btnDisplay={btnDisplay1}
              />
              
              <Button 
                bgColor={'black'}
                text={text2}
                pd={'10px 20px'}
                onClick={closeOverlayOnClick}
                btnDisplay={btnDisplay2}
              />
          </OverlayButton>
      </OverlayCard>
    </OverlayWrapper>
  )
}
