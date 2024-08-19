

import React from 'react'
import { FormWrapperContainer, TravelActivities, } from './FormWrapper.style'
import BookingHeaderContent from '../book_sub_header/BookingHeaderContent'



export default function FormWrapper({children, bgColor, tLeftRadius, tRightRadius}) {
  return (
            <FormWrapperContainer bgColor={bgColor} tLeftRadius={tLeftRadius} tRightRadius={tRightRadius}>
              {children}
            </FormWrapperContainer>
  )
}
