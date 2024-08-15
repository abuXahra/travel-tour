import styled from "styled-components";


export const ManageBookingWapper = styled.div`

width: 100%;
display: flex;
gap: 20px;
align-items: start;   

div{
    width: 100%;
}

    
@media (max-width:768px) {
    flex-direction: column;
      div{
        width: 100%;
 
    }
    }

`


export const ButtonContainer=styled.div`
 width: 38%;
`

export const  headerStyled = styled.span`
    color: black;
`