import styled from "styled-components";
import {MdFlight} from "react-icons/md"


export const FlightResultWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #0d398420;
`


export const FlightResultHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    background-color: #0D3984;
    padding: 40px;
    color: white;
    font-size: 25px;
    gap: 10px;

    span {
        color: #FF6805;
    }

`

export const DateFlight  = styled.p`
    font-size: 12px;
`


export const FlightResultContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: start;
    padding: 10px 40px;
    font-weight: normal;
    gap: 10px;

    
    @media (max-width:768px) {
        padding: 5px;
    }
`


export const ResultSidebar = styled.div` //not in use currently
    width: 25%;
    height: auto;
    border: 1px solid #0D3984;
    border-radius: 10px;
    padding: 20px;
    margin-top: 50px;
    background-color: white;
    display: none;
`


export const FlightResultMain = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 20px;
`


export const ResultCounter = styled.div`
       width: 100%;
       display: flex;
       padding: 20px;
       justify-content: space-between;
       margin-bottom: 20px;

       @media (max-width:768px) {
        flex-direction: column;
        gap: 20px; 
    }
`

export const ResultCounterLeft=styled.div`
    display: flex;
    flex-direction: column;
    gap:10px;
` 

export const ResultCounterRight=styled.div`
    display: flex;
    gap:10px; 

    span{
        background-color:white;
        border-radius: 30px;
        padding: 10px 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    @media (max-width:768px) {
        width: 100%;
        span{
            border-radius: 30px;
            padding: 10px; 
            font-size: 12px
        }
    }

` 


export const FlightCard = styled.div`
 background-color: white;
 box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
 border-radius: 20px;
 padding: 25px;
 display: flex;
 gap: 10px;
 flex-direction: column;
 margin-bottom: 40px;

 p{
    font-size: 13px;
 }

`


export const FlightLogo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px;
    gap: 20px;
    div{

    color: blue;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    text-decoration: underline;
 }

 
 span {
    display: flex;
    align-items: center;
    color: #3d3d3d;
    font-size: 12px;
    font-weight: bold;
    gap: 10px;

    img{
        height: 20px;
    }


 }
`


export const FlightCardContent = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;

    
    @media (max-width:768px) {
        width: 100%;
        flex-direction: column;
    }
`

export const DnRWrapper = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 gap: 10px;
 div{
    width: 100%;
    display: flex;
    background-color: #0d398413;
    border-radius: 20px;
    padding: 20px 50px;
    gap: 20px;
    justify-content: space-between;

    span{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap:5px;
        justify-content: center;
        align-items: start;
        font-size: 13px;
    }

    span:nth-child(2){
        align-items: center;
        width: 100px;
    }
 }


 @media (max-width:768px) {
        width: 100%;
    
div{
    width: 100%;
    justify-content: start;
    padding: 20px 20px;
    display: flex;
    flex-direction: row;
    gap: 5px;
    

    span{
        width: 100%;
        justify-content: center;
        align-items: start;
        font-size: 9.5px;
    }


    span:nth-child(2){
        align-items: center;
        width: 100px;
    }
 }


    }
`

export const DnRHeader = styled.span`
    display : flex;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
    color: #545353;
    padding-left: 10px;
    padding-right: 10px;

    p{
        font-size: 10px;
    }
    
`



export const MdFlightStyled = styled.b`
    color: ${({IconColor})=>IconColor || "#0D3984"};
    font-size: 10px;
    rotate: ${({rotateIcon})=> rotateIcon || 90+'deg'};
`


// FLIGHT VIEW DETAIL STYLE

export const FLightDetail = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
    position: fixed;
    top: 0;
    left: 0;
    overflow: auto;
    background-color: white;

    @media (max-width:768px) {
        padding: 20px;
    }

`

export const FlightDetailClose = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    font-size: 25px;
    cursor: pointer;
`

export const FLightDetailContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    align-items: center;

    @media (max-width:768px) {
        flex-direction: column;
        width: 100%;
    }
`

export const FlightDetailDNR = styled.div`
    display: 'flex';
    flex-direction: column;
    width: 40%;
    color: black;
    background-color: #0d398413;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 20px;
    padding: 20px 30px;   
     
    span{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #8080804a;
        padding-bottom: 10px;
        gap: 30px;
        /* margin-bottom: 20px; */
    }


    @media (max-width:768px) {
        width: 100%;
    }

`


export const FlightTitleWrapper = styled.div`
        
            display: flex;
            gap: 20px;
            align-items: center;
            width: 70%;
        
`

export const DNRDetail = styled.div`
     width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`

export const DNRDetailFlightImage = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 0;
        border-bottom: 1px solid #8080804a;
        img{
            width: 60px;
            border-radius: 20px;
        }
`


export const DNRDetailTime = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        width: 100%;
        padding-top: 10px;
        border-bottom: 1px solid #8080804a;
        font-size: 13px;  
        
        span{
            width: 100%;
            display: flex;
            /* justify-content: space-between;
            align-items: center;
            border: none; */
            flex-direction: column;
            justify-content: center;
            align-items: start;
            font-size: 9.5px;
            }
`

export const DNRDetailTimeSec= styled.span`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    font-size: 9.5px;
`
    

export const DNRDetailAirport = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        font-size: 13px;
        gap: 50px;
        line-height: 20px;
        padding: 10px 0;
        border-bottom: 1px solid #8080804a;

        & div:nth-child(1){
            text-align: left;
        }

        
        & div:nth-child(2){
            text-align: right;
        }

        @media (max-width:768px) {
        gap: 50px;;
    }
`


export const DNRDetailBaggage = styled.div`
        display: flex;
        justify-content: space-between;
        width: 100%;

        span{
            display: flex;
            margin-top: 10px;
            align-items: start;
            flex-direction: column;
            justify-content: start;
            border: none;
            font-size: 12px;
            padding-bottom: 0px;
        }

        & span:nth-child(1){
            text-align: left;
        }     

        & span:nth-child(2){text-align: right;}
`
export const FlightDetailButton = styled.div`
    width: 80%; 
    display: flex;
    justify-content: flex-end;
   
    @media (max-width:768px) {
        width: 100%; 
    }
`