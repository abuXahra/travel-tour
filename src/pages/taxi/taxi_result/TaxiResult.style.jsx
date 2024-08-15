import styled from "styled-components"



export const TaxiResultWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #0d398420;
`


export const TaxiResultHeader = styled.div`
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


export const TaxiResultContent = styled.div`
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
    width: 30%;
    height: auto;
    border-radius: 10px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap:20px;
    
    @media (max-width:768px) {
      display: none;
    }
`

export const SideBarContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    border: 1px solid #0D3984;
`

export const EarnPointCard = styled.div`
    width: 100%;
    background-image: url(${({bg})=>bg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: auto;
    display: flex;
    justify-content: flex-start;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;  

    div{
        height: 100%;
        width: 70%;
        background-color: gainsboro;
        display: flex;
         flex-direction: column;
         justify-content: space-between;   
         border-radius: 10px;
         padding: 20px;
         gap: 10px;
         padding-right: 50px;
     

         span{
            font-size: 12px;
         }

         a{
            font-size: 12px;
         }
    }
`

export const TaxiResultMain = styled.div`
    width: 70%;
    height: auto;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 20px;
    gap: 20px;
    @media (max-width:768px) {
      width: 100%; 
    }
`


export const ResultCounter = styled.div`
    background-color: white;
    border-radius: 10px;
       width: 100%;
       display: flex;
       padding: 20px;
        flex-direction: column;
        gap: 20px;
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
