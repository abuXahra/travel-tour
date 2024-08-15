import { FaTimes } from "react-icons/fa";
import styled from "styled-components";


export const VisaWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
   `

   
export const  VisaFormSection = styled.div`
height: ${({sectionHeight}) => sectionHeight || '100vh'};
width: 100%;
display: flex;
justify-content: center;
flex-direction: column;
color: ${({fontColor})=> fontColor || 'white'};
align-items: start;
padding: 100px;
gap: 20px;

@media (max-width:768px) {
    height: auto;
    padding: 50px 20px;
}

`

export const VisaBody = styled.div`
     width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 50px;

    h2{
        color: #0D3984;
        margin-bottom: 10px;
    }

    
    @media (max-width:768px) {
        padding: 30px 20px;
    }
`

export const VisaFormSectionTitle = styled.div`

    width: 100%;
    display: flex;
    gap: 10px;
    flex-direction: column;
    h1{
         font-size: 40px;
    }
`


export const VisaFormSectionContent = styled.div`
    width: 100%;
    display: flex;
    /* gap: 10px; */
    flex-direction: column;   
`


export const VisaRoom = styled.div`
         width: 100%;
         height: auto;
         display: flex;
         flex-direction: column;
         gap: 20px;
`

export const Section = styled.div`
 display: flex;
 flex-direction: column;
 gap: 20px;

`

export const VisaContentWrapper = styled.div`
    display: flex;
    width: 100%;
    gap: 20px;
    justify-content: center;

    @media (max-width:768px) {
        gap: 20px;
        flex-direction: column;
    }

`


export const SpaceBetweenContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a{
        color: #0D3984;
        text-decoration: none;
        display: flex;
        gap: 10px;
        align-items: center;
        border: 2px solid #0D3984;
        border-radius: 10px;
        padding: 10px;

        &:hover{
            scale: 1.1;
        }
    }
`


export const HorizontalSpacing = styled.span`
      height: 20px;
`
  


export const  PopupContent =styled.div`
      width: ${({wd})=>wd || "100%"};
      display: flex;
      flex-direction: column;
      gap: 20px;
      background-color: white;
      padding: 20px;
      border-radius: 10px;
      @media (max-width:768px) {
        padding: 20px;
        width: ${({swd})=>swd || "100%"};
   }
`


export const H3Styled  = styled.h3`
 text-align: center;
 margin-top: 30px;

`

export const HRStyled = styled.hr`
      border: 0.5px solid #0d398420; 
`


export const ClosePopup = styled.span`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`

export const CloseIcon = styled(FaTimes)`
    font-size: 18px;
    cursor: pointer;
`