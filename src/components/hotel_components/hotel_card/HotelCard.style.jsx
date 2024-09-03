import { IoIosCheckmarkCircleOutline } from "react-icons/io"
import styled from "styled-components"

export const HotelCardWrapper = styled.div`
           /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
           box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
           height: auto;
           width: 300px;  /* Set the desired width */
           display: flex;
           flex-direction: column;
           border-radius: 10px;
           padding: 1px;
           position: relative;
      @media (max-width:768px) {
        width: 100%;
  
    }

`

export const CardImage = styled.div`
  width: 100%;  /* Set the desired width */
  height: 200px; /* Set the desired height */
  overflow: hidden;
  position: relative;
  z-index: -20px;
  background-image: url(${({bgImage})=>bgImage});
  background-size: cover; /* Scales the background image to cover the entire div */
  background-position: center; /* Centers the background image */
  background-repeat: no-repeat; 
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  @media (max-width:768px) {
    height: 300px;
  
    }


  span{
    position: absolute;
    background-color: white;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    right:10px;
    top: 10px;
    font-size: 18px;
    color: ${({favoriteColor})=>favoriteColor};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    cursor: pointer;
  }
`

export const FCardAdded = styled.div`
      display: flex;
      flex-direction: column;
      gap: 5px;
      padding: 10px;
      position: absolute;
      width: auto;
      top: 45px;
      right:25px;
      background-color: white;
      height: auto;
      border-radius: 10px;
      border-top-right-radius: 0px;

      div{
        display: flex;
        flex-direction: row;
        gap: 5px;
        font-size: 12px;
        width: 100%;
        cursor: pointer;

        b{
          color: blue;
          
          &:hover{
            text-decoration: underline;
          }
        }
      }
    `


export const SafeInfo = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #232323;
  color: white;
  font-size: 12px;
  border-radius: 5px;
  position: absolute;
  padding: 5px;
  right: 0px;
  top: -25px;
  z-index: 1000px;
`

export const CardContent = styled.div`
     display: flex;
     flex-direction: column;
     gap: 20px;
     padding: 20px;
    
`

export const IoIosCheckmarkCircleStyled = styled(IoIosCheckmarkCircleOutline)`
  color: red;
`

export const CardTitle = styled.div`
    color: grey;
    font-size: 12px;
`

export const CardSubTitle = styled.div`
      color: grey;
      font-size: 13px;
`

export const CardRating = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    font-size: 12px;

    span{
        background-color: #0D3984;
        border-radius: 5px;
        padding: 5px;
        color: white;
    }
    

`


export const CardPrice = styled.div`
       font-size: 12px;
       display: flex;
        gap: 10px;
        align-items: center;
        font-size: 13px;
        justify-content: space-between;
`
