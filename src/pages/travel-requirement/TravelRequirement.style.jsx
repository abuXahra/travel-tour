

import styled from "styled-components"

export const TravelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;   
`


export const TravelSectionTitle = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    flex-direction: column;
    h1{
         font-size: 40px;
    }
`

export const  TravelSection = styled.div`
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


export const TravelPackagesItems = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    @media (max-width:768px) {


    }
`