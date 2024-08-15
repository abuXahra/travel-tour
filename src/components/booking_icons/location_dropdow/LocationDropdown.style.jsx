import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { MdFlightTakeoff } from 'react-icons/md'

export const LocationDropdownWrapper = styled.div`
        width: 100%;
        height: auto;
        border-radius: 10px;
        font-size: 13px;
        background-color: white;
        position: absolute;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        z-index: 20;
        overflow: auto;
        margin-top: 10px;
      


`

export const LocationDropdownInput = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 10px;
    align-items: center;
    padding: 5px 15px;

    
    input{
            background-color: transparent;
            padding: 10px 0;
            font-size: 12px;
            font-weight: normal;
            text-transform: capitalize;
            width: 100%;
            border: none;


            &:focus {
                outline: none;
            }
        }
`

export const FaSearchStyled = styled(FaSearch)`
    color: grey;
`


export const LocationDropdownSearchResult = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    h3{
        color: #454545
    }
`

export const LocationDropdownLocation = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: ${({bottomBorder}) => bottomBorder || "1px solid #8080802c"}; 
    padding-bottom: 10px;
    align-items: center;
    cursor: pointer;
`

export const LocationDropdownTakeoff = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    align-items: start;
    color: black;

    
    div{
        font-size: 13px;
        flex-direction: column;
        display: flex;
        gap: 5px;

        & p:nth-child(2){
            color: grey;
            font-size: 12px;
        }
    }
    
`


export const MdFlightTakeoffStyled = styled.span`
    color: grey;
    font-size: 20px;
`


export const LocationDropdownAbrreviate = styled.div`
        color: grey;
        font-size: 20px;
`