
import styled from 'styled-components'

export const FlightFareWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 1px solid #0D3984;
    border-radius: 10px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    background-color: white;
    /* padding: 10px;
    padding-top: 0px; */
`

export const  FlightFareHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    width: 100%;  
    background-color: #0D3984;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    color: white;
    align-items: center;

    span{
        font-size: 10px;
        font-weight: bold;
    }
`

export const FlightFareBody = styled.div`
    display: flex;
    width: 100%;
`

export const FlightFareItem = styled.div`
  width: 33.8%;
  align-items: center;
  cursor: pointer;
  padding: 20px;
  text-align: center;
  background-color: ${({ isSelected }) => isSelected ? '#0d398413' : 'transparent'};
  border: ${({ isSelected }) => isSelected ? '1px solid #0D3984' : 'none'};

  :hover{
    color: blue;
  }
`
