import styled from "styled-components";


export const WrapperFaq = styled.span`
    width: 100%;
    border-bottom: ${({bb})=>bb};
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap:10px;

    span{
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        gap: 50px;
        line-height: 25px;

        span{
            font-size: 25px;
            rotate: ${({rotateIcon})=>rotateIcon || '180deg'};
        }
    }

    p{
        font-size: 13px;
    }
`