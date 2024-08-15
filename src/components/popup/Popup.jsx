
import React from 'react'
import { PopupContent, PopupWrapper } from './Popup.style'

export default function Popup({children, alignItems, wd}) {
  return (
    <PopupWrapper alignItems={alignItems}>
       <PopupContent wd={wd}>
          {children}
        </PopupContent> 
    </PopupWrapper>
  )
}
