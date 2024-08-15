
import React, { useState } from 'react'
import { ArrowButton, CarouselContainer, CarouselWrapper, HotelCategoryWrapper, ImageWrapper, LinkStyled, Slide } from './HotelCategory.style';

export default function HotelCategory({url, imgUrl, title}) {   

  return (     
          <LinkStyled href={url}>
            <ImageWrapper>
                <img src={imgUrl} alt="" srcset="" />
            </ImageWrapper>
            <span> <h4>{title}</h4> </span>  
        </LinkStyled>
  )
}
