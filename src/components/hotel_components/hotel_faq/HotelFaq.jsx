
import React, { useState } from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { WrapperFaq } from './HotelFaq.style'

export default function HotelFaq({title, body, bb}) {

    const [showBody, setShowBody] = useState(false);
    const [rotateIcon, setRotateIcon] = useState('360deg')
    
    const handleShowBody = ()=>{
        setShowBody(!showBody)
        setRotateIcon(!rotateIcon);
    }


  return (
    <WrapperFaq rotateIcon={rotateIcon} bb={bb}>
        <span onClick={handleShowBody}><h5>{title}</h5> <span><MdOutlineKeyboardArrowDown /></span></span>
    
     {showBody && <p>{body}</p>}
    </WrapperFaq>
  )
}
