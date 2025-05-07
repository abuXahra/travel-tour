
import { FaCircle } from "react-icons/fa"
import styled from "styled-components"

export const FlightWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;   
`


export const  FlightFormSection = styled.div`
    height: ${({sectionHeight}) => sectionHeight || '100vh'};
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    color: ${({fontColor})=> fontColor || 'white'};
    align-items: start;
    padding: 100px;
    gap: 20px;

    @media (max-width:768px) {
        height: auto;
        padding: 50px 20px;
    }

`

export const FlightFormSectionTitle = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    flex-direction: column;
    h1{
         font-size: 40px;
    }
`

export const FlightFormSectionContent = styled.div`
    width: 100%;
    display: flex;
    /* gap: 10px; */
    flex-direction: column;   
`


export const ContentMain = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: #0d3984cf; //
    /* padding: 10px; */
    border-radius: 10px;
    border-top-left-radius: ${({tLeftRadius}) => tLeftRadius || '0px'};

    @media (max-width:768px) {
        padding: 20px;
    }
`
export const FormWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: ${({rounderBorder})=>rounderBorder || '10px'};
    padding: ${({pd})=>pd || '10px'};
    gap: 10px;
`
export const FlightForm = styled.div` //////////change from form to div
    width: 100%;
    flex-direction: column;
    display: flex;
    color: black;
    gap: ${({formGap})=>formGap || '10px'};
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

    @media (max-width:768px) {
       flex-direction: column;
       align-items: start
    }

`

export const FlightInputAndDropDown = styled.div`
    display: flex;
    flex-direction: column;
    width: 49%;
    
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
    /* background-color: #0d398428; */

    input{
        width: 100%;
        padding: 25px;
        border-radius: 10px;
        font-size: 13px;
        color: black;
        text-transform: capitalize;
        background-color: #0d398428;
        border: none;
            &:focus {
            outline: 2px solid #0D3984;
        }
    }

    span{
        position: absolute;
        right: 20px;
        top: 40%;
        font-size: 13px;
        color: #292929;

    }

    @media (max-width:768px) {
        input{ 
            font-size: 12px;
            padding-right: 40px;
        }
    }

    
`

export const RoundTripImg = styled.div`
        height: 20px;
        width: 20px;
        cursor: pointer;

        img{
            height: 20px;
            width: 20px;
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
        color: grey;
        position: relative;


        input{
            width: 100%;
            padding: 30px 10px 10px 10px;
            border-radius: 10px;
            font-size: 13px;
          background-color: #0d398428;
            border: none;

            &:focus {
            outline: 2px solid #0D3984;

      
         }

    }
`

export const Label = styled.label`
            position: absolute;
            top: 10px;
            left: 10px;    
`


export const FlightPassengerWrapper  = styled.div`
       width: 100%;
       display: flex;
       flex-direction: column;
`

export const FlightPassengerClass = styled.div`
            width: 100%;
            padding: 14px 10px 10px 10px;
            border-radius: 10px;
            font-size: 12px;
            background-color: #0d398428;
            /* outline: 2px solid #0D3984; */
    

            div{
                color: black;
                text-transform: capitalize;
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
        font-size: 13px;
        background-color: white;
        position: absolute;
        margin-top: 20px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
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
