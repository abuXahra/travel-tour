import styled from 'styled-components'


export const HeroWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    background-image: url(${({heroImage})=>heroImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    /* position: relative; */
    
    
    @media (max-width:768px) {
        height: auto;
    }
`

export const HeroOverlay = styled.div`
    width: 100%;
    height: auto;
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
    /* background-color: #0000009e     */
    /* background-color: #0d39840d; */
    display: flex;
    flex-direction: column;
    /* position: relative; */
    background-color: #0d398489;

        
    @media (max-width:768px) {
        height: auto;
    }
`