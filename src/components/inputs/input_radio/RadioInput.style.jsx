


import styled from "styled-components";


export const RadioWrapper = styled.div`
    display: flex;
    width: ${({InputWidth})=> InputWidth || "100%"};
    gap: 5px;
    align-items: center;
    flex-direction: column;
    font-size: 13px;  
    /* justify-content: flex-start; */
    align-items: start;
    color: grey;
`

export const RadioContent = styled.div`
    display: flex;
    width: 100%;
    gap: 10px;
`

export const RadioItem = styled.div`
    width: 50%;
    display: flex;
    gap: 10px;
    align-items: center;
    border: 1px solid #0d398420; 
    border-radius: 10px;
    padding: 10px;
  
`

export const RadioLabel = styled.label`
    color: grey;
    font-size: 13px;
`

export const RadioInputStyle = styled.input`
    color: grey;
`

export const RadioInputError = styled.span`
    color: red;
    font-size: 12px;
`