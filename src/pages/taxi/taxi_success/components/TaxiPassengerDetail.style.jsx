
import styled from "styled-components";


export const PassengerDetail = styled.div`
        display: flex;
        width: 100%;
`


export const PassengerWrapper = styled.div`
            display: flex;
            width: 100%;
            flex-direction: column;
            gap: 30px;
`


export const PassengerContent = styled.div`
            display: flex;
            width: 100%;
            gap: 20px;
            font-size: 13px;
   
            

            div{
                width: 100%;
                display: flex;
                justify-content: space-between;
           
                div{
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    
                    & span:nth-child(1){
                        font-size: 12px;
                        color: #4b4b4b;
                    }
                }
            }


     @media (max-width:768px) {
      div{
        flex-direction: column;
        gap: 20px
      }
   }
`