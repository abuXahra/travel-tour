



import styled from 'styled-components'

export const OverlayWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    padding: 20px;
    position: fixed;
    top: 0;
    left: 0;
    overflow: auto;
    background-color: #000000b9;
`


export const OverlayCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: ${({contentWidth})=> contentWidth || "35%"};
    height: ${({contentHight})=> contentHight || 'auto'};
    background-color: white;
    border-radius: 10px;
    position: relative;
    padding: 20px;
    font-size: 18px;
    text-align: left;
    /* margin-top: 20px;
    margin-bottom: 20px; */

    @media (max-width: 768px) {
        width: 80%;
 }
`

export const CloseIcon = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;

    span{
        cursor: pointer;
    }
`


export const OverlayButton = styled.div`
    cursor: pointer;
    width: 100%;
    display: flex;
    justify-content: space-between;
`