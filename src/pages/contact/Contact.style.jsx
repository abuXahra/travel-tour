

import styled from 'styled-components'



export const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
   `

export const  ContactTitleContainer = styled.div`
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

export const ContactSectionTitle = styled.div`

    width: 100%;
    display: flex;
    gap: 10px;
    flex-direction: column;
    h1{
         font-size: 60px;
    }
`


export const ContactsSection = styled.section`
    background-color: white;   
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: center;
    padding: 60px 0px;

 
`



export const ContactsWrapper = styled.div`
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    gap: 40px;  
`

export const ContactsContent = styled.div`
    background-color: #EAF0F3;
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    padding: 30px;
    gap: 20px;
    @media (max-width:768px) {
    flex-direction: column;
}
`
  

export const ContactsItemsAddress = styled.div`
     width: 50%;
     display: flex;
     flex-direction: column;
     gap: 20px;
     font-size: 14px;

@media (max-width:768px) {
    width: 100%;
    text-align: center;
}
`



export const ContactsItems = styled.div`
       width: ${({wd})=> wd || "30%"};
       font-size: 14px;

@media (max-width:768px) {
    width: 100%;
    text-align: center;
}
 `

