import styled from "styled-components";


export const CardWrapper = styled.div`
    display: flex;
    gap: 10px;
    width: 24%;
    border: ${({bder})=> bder || '1px solid #80808056'};
    align-items: center;
    padding: 20px;
    border-radius: 10px;

    span{
        font-size: 16px;
    }

    @media (max-width:768px) {
        width: 30%; 
    }
`