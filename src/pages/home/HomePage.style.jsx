import styled from "styled-components";


export const HomePageWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
`


export const  HomeTopSection = styled.div`
height: ${({sectionHeight}) => sectionHeight || '100vh'};
width: 100%;
display: flex;
justify-content: center;
flex-direction: column;
color: ${({fontColor})=> fontColor || 'white'};
align-items: start;
padding: 200px; //50px
gap: 20px; 
// line-height: 70px;

h4{
    font-size: 25px;
}
h1{
    font-size: 50px;
}

@media (max-width:768px) {
    height: auto;
    padding: 50px;
    gap: 20px; 
}

`



export const HomePageBody = styled.div`
    width: 100%;
    padding: 40px;
`