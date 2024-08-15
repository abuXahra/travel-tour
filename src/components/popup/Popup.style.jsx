import styled from "styled-components";



export const PopupWrapper = styled.div`

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


export const  PopupContent =styled.div`
      width: ${({wd})=>wd || "100%"};
      display: flex;
      flex-direction: column;
      gap: 20px;
      background-color: white;
      padding: 20px;
      border-radius: 10px;
      @media (max-width:768px) {
        padding: 20px;
        width: ${({swd})=>swd || "100%"};
   }
`