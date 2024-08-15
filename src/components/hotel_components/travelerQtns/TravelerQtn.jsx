
import React from 'react'
import { FaArrowRight, FaComment, FaComments, FaQuestion, FaRegComments } from 'react-icons/fa'
import { RiArrowRightSLine } from 'react-icons/ri'
import { FaRegCommentss, QtnWrapper, RiArrowRightSLines } from './TravelerQtn.style'

export default function TravelerQtn({text, onClick, bb}) {
  return (
    <QtnWrapper onClick={onClick} bb={bb}>
   
        
        {/* text */}
        <p>{text}</p>
   
      {/* icon */}
      <span style={{fontSize: '14px'}}><RiArrowRightSLine /></span>
    </QtnWrapper>
  )
}
