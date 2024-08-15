import styled from "styled-components";

export const ItemsWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    color: #353535;

    span{
        display: flex;
        gap: 20px;

        input{
            width: 16px;
            height: 16px;
        }
    }

    div{
        display: flex;
        gap:5px;
        flex-direction: row;
        color: ${({counterColor})=>counterColor || "#FF6805"};
    }
`