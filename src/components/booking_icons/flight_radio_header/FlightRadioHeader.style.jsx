import { FaCircle } from "react-icons/fa"
import styled from "styled-components"





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
    display: flex;;
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