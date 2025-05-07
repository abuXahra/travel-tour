import styled from 'styled-components'

export const BookingIconStyled = styled.button`
    /* background-color:  ${({headerBg})=> headerBg || '#0d3984cf'}; */
    background-color: transparent;
    color: ${({textColor}) => textColor || 'white'};
    padding: 10px;
    display: flex;
    gap: 5px;
    align-items: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    font-size: 13px;
    border: none;
    cursor: pointer;
    text-decoration: none;
    border-bottom: ${({bd}) => bd || '1px solid #fff'};

    
    @media (max-width:768px) {
        gap: 5px;
        padding: 0px;
        padding-top: 10px;
        padding-right: 5px;
        padding-bottom: 10px;
}
`
