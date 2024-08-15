import styled from "styled-components";

export const UserVisaDataWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    font-size: 13px;
`

export const UserVisaDataContent = styled.div`
    
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

`

export const VisaDataImg = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;

    img{
        width: 30%;
        height: 200px;
    }

    div{
        width: 70%;
        flex-direction: column;
        gap: 20px;

        div{
            width: 100%;
            display: flex;
            flex-direction: row;
            gap: 40px;
            border-bottom: 1px solid #0d398420; 
            padding: 10px;
            span{
                width: 50%;
            }

            & span:nth-child(1){
                font-weight: bold;

            }
        }
    }
`

