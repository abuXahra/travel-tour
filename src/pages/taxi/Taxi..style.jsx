import styled from "styled-components";


export const TaxiWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
   `

   
export const  TaxiFormSection = styled.div`
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

export const TaxiBody = styled.div`
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

export const TaxiFormSectionTitle = styled.div`

    width: 100%;
    display: flex;
    gap: 10px;
    flex-direction: column;
    h1{
         font-size: 40px;
    }
`


export const TaxiFormSectionContent = styled.div`
    width: 100%;
    display: flex;
    /* gap: 10px; */
    flex-direction: column;   
`


export const TaxiPassenger = styled.div`
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

export const TaxiContentWrapper = styled.div`
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
  

export const TaxiType = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: ${({mb})=>mb || "none"};
    gap: 10px;
    align-items: center;

  
    span{
        display: flex;
        gap: 10px;
        align-items: center;
        color: black;
        
        input{
            width:20px; 
            height: 20px; 
            background-color: blue;
        }


        label{
            font-size: 13px;
        }
    }
`