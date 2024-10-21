
import React from 'react'
import { LoaderContent, LoaderWrapper, LoadingContainer, LoadingPicture, Overlay } from './Loader.style'
import { Circles, ThreeDots } from 'react-loader-spinner'
import loaderImage from '../../images/rb_57.png'



export default function Loader() {
  return (
      <LoaderWrapper>
        {/* <img src={loaderImage} alt="" srcset="" /> */}
              <ThreeDots
                  visible={true}
                  height="100"
                  width="100"
                  color="blue"
                  radius="10"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  />
                  <h3>Searching for Flight</h3>
      </LoaderWrapper>    
  )
}
