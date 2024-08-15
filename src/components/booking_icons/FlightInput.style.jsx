import styled from "styled-components"





export const FlightInputWrapper = styled.div`
         width: ${({contWidth})=>contWidth || "100%"};
         display: flex;
         flex-direction: column;
         align-items: start;
         justify-content: start;
         gap: 10px;
         height: auto;
        
        position: relative;
      


        input{
            width: 100%;
            padding: 25px;
            border-radius: 10px;
            font-size: 15px;
            background-color: #0d398428;
            border: none;
            font-weight: bold;
            color: black;

            &:focus {
            outline: 2px solid #0D3984;

      
         }

    }
`

export const Label = styled.label`
font-size: 13px;
            position: absolute;
            top: ${({tp})=>tp|| "10px"};
            left: ${({lf})=>lf|| "10px"}; 
`


export const ErrorMessage = styled.div`
     width: 100%;
     color: red;
     font-size: 12px;
`