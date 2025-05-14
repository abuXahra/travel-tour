
import styled from 'styled-components'


export const MultiFlightPassengerClass = styled.div`
            width: 100%;
            padding: 14px 10px 10px 10px;
            border-radius: 10px;
            font-size: 15px;
            background-color: #0d398428;
            text-transform: capitalize;
            font-weight: bold;
            display: flex;
            justify-content: space-between;
          
           
            & span:nth-child(2){
               font: 20px;
            }

            @media (max-width:768px) {
                width: 100%;
    }
            
`

export const MultiFlightClass = styled.div`
            width: 100%;
            display: flex;
            flex-direction: column;
            position: relative;

            @media (max-width:768px) {
                width: 100%;
    }
            
`


export const MultiFlightClassTitle = styled.div`
            width: 100%;
            padding: 28px 15px 20px 15px;
            border-radius: 10px;
            font-size: 13px;
            text-transform: capitalize;
            font-weight: bold;
            display: flex;
            flex-direction: column;
            gap:2px;
            justify-content: space-between;
            background-color: #0d398428;
              color: black;
           

            & span:nth-child(1){
                text-transform: capitalize;
            }
            & span:nth-child(2){
            display: flex;
            justify-content: space-between;
               font-size: 14px;
               width: 100%;
               color: black;

            }
`


export const MultiFlightClassDropdown = styled.div`
        width: 100%;
        height: auto;
        border-radius: 10px;
        background-color: white;
        position: absolute;
        margin-top: 70px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        display: flex;
        flex-direction: column;
        padding: 20px;
        z-index: 9999;


        span{
            color: black;
            font-size: 14px;
            display: flex;
            padding: 10px;
            gap: 10px;
            cursor: pointer;

            &:hover{
                background-color: #80808040;
            }
        }

`

export const MultiPassengerContainer = styled.div`
    width: ${({pWidth}) => pWidth|| '100%'};
  

    @media (max-width:768px) {
                width: 100%;
    }
     
`


export const MultiFlightPassengerContent = styled.div`
    width: 100%;
    position: relative;

`

export const MulitPassengerWrapper = styled.div`
        width: 100%;
        height: auto;
        border-radius: 10px;
        font-size: 13px;
        background-color: white;
        position: absolute;
        margin-top: 20px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        z-index: 100;
        gap: 20px;
`



export const MultiFlightPassengerWrapper  = styled.div`
       width: 100%;
       display: flex;
       justify-content: space-between;
 
       
    @media (max-width:768px) {
                flex-direction: column-reverse;
                gap: 10px;
                justify-content: end;
                align-items: center;
    }
`


export const DeleteDestination = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 100%;
    background-color: #FF6805;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    cursor: pointer;
    position: absolute;
    align-self: self-end;
`

export const MulticCityContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`


export const PassengerWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    align-items: center;

    
    span{
        display: flex;
        gap: 10px;
        align-items: center;
        color: black;
        
        input{
            width:20px; 
            height: 20px; 
            background-color: blue;
        }


        label{
            font-size: 13px;
        }
    }
`

export const PassengerContent = styled.div`
         width: 100%;
        color: grey;
        position: relative;
       


        input{
            width: 100%;
            padding: 30px 10px 10px 10px;
            border-radius: 10px;
            font-size: 15px;
            background-color: #0d398428;
            border: none;

            &:focus {
            outline: 2px solid #0D3984;

      
         }

    }
`