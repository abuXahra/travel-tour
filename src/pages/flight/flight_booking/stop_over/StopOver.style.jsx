import styled from "styled-components";


export const StopOverDaysWrapper =styled.div`
 display: flex;
 justify-content: space-between;
 gap: 50px;


 @media (max-width:768px) {
       flex-direction: column;
       gap:10px;
    }
`

export const PStyled = styled.div`
    margin-block: 20px;
    color: black;
    font-size: 13px; 
    line-height: 20px;

    @media (max-width:768px) {
       margin-inline: 0px;
       gap:0px;
    }
`



export const DaysButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`


export const DaysButton = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    height: 20px;

    span{
        color: black;
        border: 1px solid #00000032;
        padding: 5px 10px;
        /* border-radius: 10px; */
    }

    div {
    font-size: 20px;
    padding: 0px 10px;
    border: none;
    background-color: #FF6805;
    color: white;
    border-radius: 5px;
    cursor: pointer;
}



`


export const  ButtonWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: ${({justify})=> justify || "center"};
    align-items: center;

    @media (max-width:768px) {
      justify-content: flex-start;
      margin-top: 10px;
    }
`


export const StopOverRoom = styled.div`
         width: 100%;
         height: auto;
         display: flex;
         flex-direction: column;
         gap: 20px;
`