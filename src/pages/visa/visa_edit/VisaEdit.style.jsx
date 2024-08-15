import styled from "styled-components"


export const VisaEditWrapper  = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: white;
    height: auto;

        
    @media (max-width:768px) {
    
        width: 100%;
        height: auto;

    }
  `

    export const VisaEditHeader = styled.div`
    height: 300px;
    width: 100%;
    background-color: #0D3984;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius:80%;
    
    @media (max-width:768px) {
        flex-direction: column;
        width: 100%;
        border-bottom-left-radius: 0%;
        border-bottom-right-radius:0%;
        height: 150px;
    }
`




export const VisaEditHeaderItems = styled.div`
    width: 100%;
    display: flex;
    /* gap: 30px; */
    padding: 30px;
    color: white;
    align-items: center;
    justify-content: space-between;

    @media (max-width:768px) {
        flex-direction: column;
        width: 100%;
        gap: 20px;
    }
`


export const  VisaEditHeaderTitle = styled.div`
        display: flex;
        gap: 30px;
        align-items: center;

        @media (max-width:768px) {
        width: 100%;

        h2{
            font-size: 20px;
        }
    }
`

export const VisaEditBody = styled.div`
    width: 100%;
    margin-top: -220px;
    display: flex;
    gap: 20px;
    padding: 20px 40px;
    height: auto;

    @media (max-width:768px) {
        flex-direction: column;
        width: 100%;
        gap: 20px;
        margin-top: 0px;
    }
`



export const VisaEditContent =styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 20px;
background-color: white;
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
padding: 30px;
border-radius: 10px;
@media (max-width:768px) {
  padding: 20px
}
`