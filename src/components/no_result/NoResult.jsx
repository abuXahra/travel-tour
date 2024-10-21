
import React from 'react'
import { NoResultWrapper } from './NoResult.style'
import { FaSearch } from 'react-icons/fa'
import noResultImage from '../../images/no_search_result.svg'

export default function NoResult() {
  return (
    <NoResultWrapper>
        <img src={noResultImage} alt="" srcset="" />  
       <h3>No Result Found</h3>
    </NoResultWrapper>
  )
}
