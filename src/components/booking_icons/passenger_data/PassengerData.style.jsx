import styled from "styled-components";


export const PassengerDataWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const PassengerTitle = styled.div`
        display: flex;
        flex-direction: column;


    span {

    font-size: 12px;
;
}
`


export const PassengerButton = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    height: 20px;

    div {
    font-size: 20px;
    padding: 0px 10px;
    border: none;
    background-color: #FF6805;
    color: white;
    border-radius: 5px;
    cursor: pointer;
}

span {
    border: #D4D4D4 1px solid;
    border-radius: 5px;
    width: 30px;
    height: 25px;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
}

`
