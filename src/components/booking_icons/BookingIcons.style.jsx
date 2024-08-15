import styled from 'styled-components'

export const BookingIconStyled = styled.a`
    background-color:  ${({headerBg})=> headerBg || '#0d3984cf'};
    color: white;
    padding: 20px 40px;
    display: flex;
    gap: 10px;
    align-items: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    font-size: 13px;
    cursor: pointer;
    text-decoration: none;
    border-bottom: ${({bd}) => bd || '1px solid #fff'};
`
