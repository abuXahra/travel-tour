
import { FaCircle } from "react-icons/fa"
import styled from "styled-components"




export const FlightForm = styled.div` //////////change from form to div
    width: 100%;
    flex-direction: column;
    display: flex;
    color: black;
    gap: ${({formGap})=>formGap || '5px'};
`


export const FlightType = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: ${({mb})=>mb || "none"};
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

export const RadioItemWrapper = styled.div`
    gap: 10px;
    display: flex;
    align-items: center;
    color: black;
    label{
            font-size: 13px;
        }
`

export const RadioItem = styled.div`
            width:20px; 
            height: 20px; 
            border-radius: 100%;
            border: 1.5px solid ${({brColor}) => brColor};
            background-color: white;
            padding: 2px;
            display: flex;
            justify-content: center;
            align-items: center;
`
export const RadioCheck =styled(FaCircle)`
                color:  ${({checkColor}) =>checkColor};  
                border-radius: 100%;
                display: flex;
`

export const FlightInputContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    align-items: center;
    position: relative;

    @media (max-width:768px) {
       flex-direction: column;
       align-items: start
    }

`

export const FlightInputAndDropDown = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    
    @media (max-width:768px) {
        width: 100%;
       flex-direction: column;
       align-items: start
    }
`

export const FlightInputWrapper = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 10px;
    background-color: #0d398428;

    input{
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        padding-top: 30px;
         padding-bottom: 25px;
        border-radius: 10px;
        font-size: 25px;
        color: black;
        text-transform: capitalize;
        background-color: transparent;
        border: none;
            &:focus {
            outline: 2px solid #0D3984;
        }
    }

    span{
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 13px;
        color: #292929;

    }

        p{
        font-size: 10px;
        position: absolute;
        left:  15px;
        bottom: 10px;
        color: grey;
    }
    @media (max-width:768px) {
        input{ 
            font-size: 12px;
            padding-right: 40px;
        }
    }

    
`

export const RoundTripImg = styled.div`
        height: 25px;
        width: 25px;
        top: 33%;
        right: 48.9%;
        cursor: pointer;
        border-radius: 100%;
        background-color: white;
        position: absolute;
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
        justify-content: center;
        align-items: center;
        display: flex;
        z-index: 999;

        img{
            height: 18px;
            width: 18px;
            rotate: calc(45deg);

        }
        @media (max-width:768px) {
        display: none
    }
`


export const FlightDepartWrapper = styled.div`
        width: 100%;
        display: flex;
        gap: ${({inputGap})=> inputGap || '10px'};
       
        @media (max-width:768px) {
        
        flex-direction: column;
        gap: 10px;
    }
`




export const FlightDepatWrapContent = styled.div`
        width: ${({contWidth})=>contWidth || "100%"};
        background-color: ${({bgColor}) => bgColor || ""};
        position: relative;
        border-radius: ${({borderRadius}) => borderRadius || ""};
            padding-right: 15px;
            padding-left: 15px;
            padding-top: 25px;
            padding-bottom: 25px;
`

export const Label = styled.label`
            position: absolute;
            top: 15px;
            left: 20px;
            font-size: 10px;
            color: grey;
`


export const FlightPassengerWrapper  = styled.div`
       width: 100%;
       display: flex;
       flex-direction: column;
       position: relative;
`

export const FlightPassengerClass = styled.div`
            width: 100%;
            display: flex;
            flex-direction: column;
            text-transform: capitalize;
            font-size: 12px;
            padding-top: 10px;
            div{
                color: black;
                
                
            }
            
`


export const FlightPassengerContent = styled.div`
    width: 100%;
    position: relative;
`

export const PassengerWrapper = styled.div`
        width: 100%;
        height: auto;
        border-radius: 10px;
        font-size: 12px;
        background-color: white;
        position: absolute;
        margin-top: 20px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        z-index: 999;

`


export const TakeOffWrapper = styled.div`
                width: 100%;
                position: relative;
`

export const DestinationWrapper = styled.div`
                width: 100%;
                position: relative;
`


export const BodyContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 40px;

    p{
        line-height: 25px;
    }
`

export const SubmitButtonWrapper = styled.div`
    display: ${({displayButton}) => displayButton || 'none'};
    justify-content: space-between; 
    align-items: center;
`

export const FormInputs = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;

      @media (max-width:768px) {
        width: 100%;
        flex-direction: column;
        gap: 10px;
    }
`