
import styled from 'styled-components'

export const MdFlightStyled = styled.div`
    color: ${({IconColor})=>IconColor || "#0D3984"};
    font-size: ${({IconSize})=> IconSize || "24px"} ;
    rotate: ${({rotateIcon})=> rotateIcon};
`