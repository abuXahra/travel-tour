import { FaTimes } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import styled from "styled-components";



export const HotelSuccessWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #0d398420;
    padding-bottom: 40px;
    height: auto;
    /* position: relative; */

        
    @media (max-width:768px) {
    
        width: 100%;
        height: auto;

    }
    
`



export const HotelSuccessHeader = styled.div`
    height: 250px;
    padding: 20px;
    width: 100%;
    background-color: #0D3984;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius:80%;

    
    @media (max-width:768px) {
        flex-direction: column;
        width: 100%;
        border-bottom-left-radius: 0%;
        border-bottom-right-radius:0%;
        height: 85px;
    }
`


export const HotelSuccessHeaderItems = styled.div`
    width: 100%;
    display: flex;
    /* gap: 30px; */
    padding: 30px;
    color: white;
    align-items: center;
    justify-content: space-between;

    @media (max-width:768px) {
        flex-direction: column;
        width: 100%;
        gap: 20px;
    }
`


export const HotelSuccessHeaderTitle = styled.div`
        display: flex;
        gap: 30px;
        align-items: center;

        @media (max-width:768px) {
        width: 100%;

        h2{
            font-size: 20px;
        }
    }
`

export const HotelSuccessBody = styled.div`
    width: 100%;
    margin-top: -200px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px 40px;
    height: auto;

    @media (max-width:768px) {
        flex-direction: column;
        width: 100%;
        gap: 20px;
        margin-top: 0px;
    }
`

export const  SuccessWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;
    font-size: 13px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h2{
        color: #0D3984;
    }

    p{
        margin-left: 100px;
        margin-right: 100px;
        text-align: center;
    }

    @media (max-width:768px) {
        width: 100%;
        p{
            margin: 0px;
        }
    }

`

export const MarkIcon =styled.div`
    height: 70px;
    width: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #80808034;
    font-size: 25px;
    color: #0D3984;
    border-radius: 100%;
`

export const BookingId = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;

    span{
        border: 2px dashed grey;
        padding: 5px;
        border-radius: 10px;
    }

    div{
        font-size: 12px;
        color: grey;
        cursor: pointer;
    }

    @media (max-width:768px) {
     flex-direction: column;
    }

    
`


export const PaymentStatusContent = styled.div`
    margin-top: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    border-top: 1px solid #80808024;
    font-size: 12px;
    padding-top: 40px;

    div{
    
        display: flex;
        gap: 10px;
        padding: 20px;
        width: auto;
        border-radius: 10px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }

    @media (max-width:768px) {
      flex-direction: column;
      padding-top: 20px;
      margin-top: 20px;
      div{
        justify-content: space-between;
      }
    }
`

export const HotelSuccessContent = styled.div`
      width: ${({ wd }) => wd || "85%"};
      display: flex;
      flex-direction: column;
      gap: 20px;
      background-color: white;
      padding: 50px;
      border-radius: 10px;
      @media (max-width:768px) {
        padding: 20px;
        width: ${({ swd }) => swd || "100%"};
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
   }
`




export const ContainerHeader = styled.div`
        display: flex;
        justify-content: space-between;
        color: #696969;
        border-top: ${({hBt})=> hBt || '1px solid #48484868'};
        border-bottom: ${({hBb})=> hBb || '1px solid #48484868'};
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: '12px';
        div{
            width: 50%;
        }

        span{
            color: black;
        }
`

export const Containerbody = styled.div`
      display: flex;
      justify-content: space-between;
        width: 100%;
        gap: 50px;
        color: #373737;

        div{
            width: ${({ wd }) => wd || '50%'};
            display: flex;
            flex-direction: column;
            gap: 10px;

            span{
                width: 100%;
                border-bottom: ${({ bb }) => bb || 'none'};
                padding-bottom: ${({ pb }) => pb || 'none'};
            }
        }
`





export const HRStyled =  styled.hr`
    width: ${({lineWidth})=> lineWidth || "100%"};
    border: 1px solid #80808017;
` 


export const ButtonWrapper = styled.div`
    display: flex;
    width: 85%;
    justify-content: flex-end;
    align-items: center;
`

export const ContactDetail  = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    color: #515151;

    @media (max-width:768px) {
        flex-direction: column;
   }
`


export const HotelDetailWrapper =styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: #0d398420;
    border-radius: 10px;
    gap: 20px;

    span{
        display: flex;
        gap: 20px;
        align-items: center;
        
        h3{
            font-weight: bold;
        }

        p{
            font-size: 13px;
            font-weight: bold;
        }
    }

 

`





export const HotelGuestInfoContent =styled.div`
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      background-color: white;
      padding: 20px;
      border-radius: 10px;
      @media (max-width:768px) {
        padding: 20px
   }
`

export const HotelGutestDetailWrapper =styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: #0d398420;
    border-radius: 10px;
    gap: 20px;

    span{
        display: flex;
        gap: 20px;
        align-items: center;
        
        h3{
            font-weight: bold;
        }

        p{
            font-size: 13px;
            font-weight: bold;
        }
    }

`


export const HotelGutestDetailTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    div{
            font-size: 20px;
            /* color: #0D3984; */
            cursor: pointer;
        }

        @media (max-width:768px) {

            flex-direction: column;

      & span:nth-child(2){
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 20px;
        padding-right: 10px;
      }
   }
`
export const HotelGutestDetailBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`


export const HotelGutestDetailClass = styled.div`
        width: 100%;
        display: flex;
        justify-content: space-between;
        
        span{
            display: flex;
            align-items: center;
            gap: 5px;

            img{
            height: 20px;
        }
        
        a{
            text-decoration: none;
            color: #0D3984;
        }
    }

    @media (max-width:768px) {

flex-direction: column;

span{
     
    font-size: 12px;
     

    }
}
`

export const HotelTripDetailTime = styled.div`
    width: 100%;
    background-color: white;
    border-radius: 10px;
    padding: 25px;
    color: black;
    display: flex;
    gap: 20px;

    @media (max-width:768px) {
        flex-direction: column;
    }

`

export const HotelTripHour = styled.div`
        span{
            width: 100%;
            display: flex;
            justify-content: space-between;


            div{
                display: flex;
                flex-direction: column;
                gap: 20px;
             

                hr{
                    rotate: 90deg;
                    border: 1px solid  #0D3984; 
                }
            }


            & div:nth-child(1){
                width: 150px;
                            }
        }


        @media (max-width:768px) {
            span{
            flex-direction: column;
            & div:nth-child(1){
                width: 100%;
                flex-direction: row;
                justify-content: space-between;                
            }

            & div:nth-child(2){
                display: none;
            }
        }
        }
`

    



export const HotelTripAirport = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
  
    div{
        display: flex;
        flex-direction: column;
        gap: 10px;
        font-size: 16px;
    

        ul li{
            font-size: 12px;
        }

        span{
            display: flex;
            flex-direction: column;
            align-items: start;
        }
    }

    & div:nth-child(2){
        span{
            display: flex;
            gap: 2px;
            align-items: start;

            span{
                font-size: 12px;
            }
        }

    }

    @media (max-width:768px) {
        flex-direction: column;
        align-items: start;
        gap: 10px;

        div{
        display: flex;
        flex-direction: column;
        gap: 10px;
        font-size: 16px;


        & span:nth-child(1){
            margin-bottom: 0px;
            
        }
    }
}
`