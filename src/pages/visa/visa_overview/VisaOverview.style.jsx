import { FaTimes } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import styled from "styled-components";



export const OverviewWrapper = styled.div`
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


export const TermsDetail = styled.div`

    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: ${({alignItems})=> alignItems || 'center'};;
    gap: 20px;
    padding: 20px;
    position: fixed;
    top: 0;
    left: 0;
    overflow: auto;
    background-color: #000000b9;
`


export const TermsDetailButton = styled.div`
    
`


export const OverviewHeader = styled.div`
    height: 250px;
    width: 100%;
    background-color: #0D3984;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius:80%;

    
    @media (max-width:768px) {
        flex-direction: column;
        width: 100%;
        border-bottom-left-radius: 0%;
        border-bottom-right-radius:0%;
        height: 150px;
    }
`


export const OverviewHeaderItems = styled.div`
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


export const OverviewHeaderTitle = styled.div`
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

export const OverviewBody = styled.div`
    width: 100%;
    margin-top: -170px;
    display: flex;
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

// SIDEBAR
export const OverviewSideBar = styled.div`
   width: 25%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    

    @media (max-width:768px) {
       
        width: 100%;
        height: auto;
        margin-bottom: 20px;
    }
`

export const OverviewSideContent = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    gap: 20px;
`


export const SideFlightAirport = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: #4a4a4a;
    font-size: 13px;
    border-bottom: 1px dashed #4a4a4a;
    padding-bottom: 20px;
        
    span{
        display: flex;
        align-items: start;
        gap: 20px;
    }
  
`


export const SideFlightSummary = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #4a4a4a;
    font-size: 13px;
    border-bottom: 1px dashed #4a4a4a;
    padding-bottom: 20px;
        
    div{
        display: flex;
        justify-content: space-between;
        align-items: start;
        gap: 20px;
    }
    `

export const TotalTrip = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #4a4a4a;
    font-size: 20px;
        
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;

        & span:nth-child(2){
            font-weight: bold;
            color: #000;
    }
    }
`

export const PromoWrapper = styled.div`
          width: 100%;
          display: flex;
          height: auto;
          flex-direction: column;
          gap: 10px;
          border: 1px solid#0d398420;
          border-radius: 10px;
          background-color: white;

`

export const PromoHeader = styled.div`
            background-color:  #0D3984;
            padding: 10px;
            color: white;
            font-weight: bold;
            display: flex;
            gap: 20px;
            border-top-right-radius: 10px;
            border-top-left-radius: 10px;
`

export const PromoInput = styled.div`
            width: 100%;
          display: flex;
          padding: 10px;
          gap: 10px;
`

// CONTENT & FORM
export const TripMinContent = styled.div`
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 20px;
        margin-top: -150px;
                  
      @media (max-width:768px) {
            width: 100%;
   }

`


export const OverviewContent = styled.div`
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
   }
`


export const HorizontalLine = styled.hr`
    border: 1px solid #0D3984;
`

export const FlightContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const FlightIconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 10px;
    font-size: 12px;
    color: #3a3a3a;
    align-items: center;
`

export const FlightHeader = styled.div`
    display: flex;
    gap:10px;
    align-items: center;

    h2{
        color:#0D3984;
    }

    p{
        font-size: 12px;
    }
    `



export const FlightTimeContainer = styled.div`
    width: 100%;
    display: flex;

    
    @media (max-width:768px) {
        width: 100%;
        flex-direction: column;
        gap: 20px;
   }
`


export const ContainerWrapper = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        gap:10px;
        font-size: 12px;

        @media (max-width:768px) {
        width: 100%;
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
      padding-right: 20px;
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

                a{
                    color: blue;
                    text-decoration: none;
                }
            }
        }
`



export const ContainerTime = styled.span`
    font-size:  14px;
    color: #373737;

    b{
        color:black
    }
`



export const PDetailWrapper = styled.div`
        width: 100%;
        display: flex;
        position: relative;

    
    @media (max-width:768px) {
        width: 100%;
        flex-direction: column;
        gap: 20px;
   }
`

export const RemoveService = styled(FaTimes)`
    
    color: #0D3984;
    font-size: 20px;
    position: absolute;
    right: 0px;
    top: 10px;
    cursor: pointer;

`

export const RulesAndCondStyled = styled.div`
        display: flex;
        width: 100%;
        flex-direction: column;
`

export const RulesAndCondHeader = styled.div`
display: flex;
        justify-content: space-between;
        color: #696969;
        border-top: ${({bt})=>bt || "1px solid #48484868"};
        border-bottom: 1px solid #48484868;
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: '12px';
        cursor: pointer;
`

export const RulesAndCondContent = styled.div`
        flex-direction: column;
        display: flex;
        width: 100%;
        line-height: 25px;    
        
`



export const RulesSubHeader = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;
    margin-top: 10px;


    div{
        width: 100px;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: starts;
        cursor: pointer;

        

        span{
            width: 100%;
            border-bottom: ${({bb})=>bb || '1px solid #0D3984'};
            text-align: center;
            margin-bottom: -10px;
            padding-bottom: 5px;
        }
    }
`


export const ActiveIcon = styled(IoMdArrowDropdown)`
 color:#0D3984;
 font-size: 25px;
 align-self: center;
`

export const RulesSubBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    div{
        width: 100%;
        padding: 20px;
    }
    
`




export const IconWrapper = styled.div`
    rotate: ${({rotateIcon})=> rotateIcon || '180deg'};
    transition: ease-in-out;
`



export const PaymentModeWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
    @media (max-width:768px) {
    
    width: 100%;
    height: auto;
    flex-direction: column;

}
`


export const PaymentModeContent = styled.div`
    justify-content: space-between;
    display: flex;
    padding: 20px;
    width: 100%;
    border-radius: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;;
    align-items: center;
    & span:nth-child(1){
        display: flex;
        gap: 10px;
        align-items: center;
    }

`

export const AgreeWrapper = styled.div`
    display: flex;
    width: 100%;
    gap: 12px;
    font-size: 12px;

    input{
        width: 16px;
        height: 16px;
    }

    span{
        color: red;
    }

    p{
        span{
            color: black;
            text-decoration: underline;
            cursor: pointer;
        }
    }
`

export const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 25px;

    @media (max-width:768px) {
    width: 100%;
    gap: 20px;
    flex-direction: column;
    align-items: start;
    font-size: 20px;
}
`

export const ErrorMessage  = styled.div`
    color: red;
    margin-top: 10px;
    font-size: 12px;
`


export const EditHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    span{
        cursor: pointer;
    }
`