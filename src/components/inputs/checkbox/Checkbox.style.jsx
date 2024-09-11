import styled from "styled-components";


export const CheckboxWrapper = styled.div`
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: start;
        gap:2px;
`
    


export const CheckboxContent = styled.div`
    display: flex;
    width: 100%;
    gap: 12px;
    font-size: 12px;

    input{
        width: 16px;
        height: 16px;
    }

    span{
        color: red;
    }

    p{
        span{
            color: black;
            text-decoration: underline;
            cursor: pointer;
        }
    }
`