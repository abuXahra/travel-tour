

import React from 'react'
import { FormWrapperContainer, TravelActivities, } from './FormWrapper.style'
import BookingHeaderContent from '../book_sub_header/BookingHeaderContent'



export default function FormWrapper({children, bgColor}) {
  return (
            <FormWrapperContainer bgColor={bgColor}>
              {children}
            </FormWrapperContainer>
  )
}
