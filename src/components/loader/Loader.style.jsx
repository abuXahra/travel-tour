import styled from "styled-components";


export const LoaderWrapper = styled.div`
    position: fixed;
    background-color: #ffffff;
    width: 100%;
    height: 105%;
    display: flex;
    flex-direction: column;
    justify-content: center;   
    align-items: center;
    color: blue;
    z-index: 9999;
    margin-top: -120px;
    
    span{
      font-size: 12px;
      margin-top: 10px;
    }
  `



export const HrStyled = styled.hr`
  width:  100%;
  /* height: 2px; */
  border: 1px solid ${({bg})=> bg || "orange"};
`


