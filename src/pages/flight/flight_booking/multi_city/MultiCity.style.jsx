import styled from 'styled-components'


export const MultiFlightPassengerClass = styled.div`
            width: 100%;
            padding: 14px 10px 10px 10px;
            border-radius: 10px;
            font-size: 15px;
            background-color: #0d398428;
            text-transform: uppercase;
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
            padding: 14px 10px 10px 10px;
            border-radius: 10px;
            font-size: 10px;
            text-transform: uppercase;
            font-weight: bold;
            display: flex;
            flex-direction: column;
            gap:2px;
            justify-content: space-between;
            background-color: #0d398428;
           

            & span:nth-child(1){
                text-transform: capitalize;
            }
            & span:nth-child(2){
            display: flex;
            justify-content: space-between;
               font-size: 16px;
               width: 100%;
               color: black;

            }
`


export const MultiFlightClassDropdown = styled.div`
        width: 100%;
        height: auto;
        border-radius: 10px;
        font-size: 13px;
        background-color: white;
        position: absolute;
        margin-top: 70px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        display: flex;
        flex-direction: column;
        padding: 20px;

        span{
            color: black;
            font-size: 15px;
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
    width: "100%";

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


export const CheckboxWrapper = styled.div`
    display:  flex;
    gap: 12px;
    align-items: center;
    font-size: 12px;

    input {
    height: 16px;
    width: 16px;
    appearance: none;
    background-color: white;
    border: 2px solid #ccc;
    border-radius: 2px;
    cursor: pointer;
    position: relative;
    transition: background-color 0.2s ease, border-color 0.2s ease;

    &:checked {
      background-color: #1100ff;
      border-color: #1100ff;
    }

    &:checked::after {
      content: '';
      position: absolute;
      top: 0px;
      left: 3px;
      width: 4px;
      height: 8px;
      border: solid white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
}

`