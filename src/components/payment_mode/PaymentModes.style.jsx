import { FaCircle } from "react-icons/fa"
import styled from "styled-components"



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