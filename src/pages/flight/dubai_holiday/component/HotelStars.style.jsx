import styled from "styled-components";

export const HotelStarsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction:${({rwRvs}) => rwRvs || 'row'};
    gap: 100px;
    justify-content: space-between;

    @media (max-width:768px) {
        flex-direction:${({cl}) => cl || 'column-reverse'};
        gap: 30px;
    }
`

export const HotelStarsContent = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    
ul{
    display: flex;
    flex-direction: column;
    gap:20px;
}

    @media (max-width:768px) {
        width: 100%;
    }
`

export const HotelStarsPicture = styled.div`
    width: 50%;
    height: 500px;
    display: flex;
    border-radius: 20px;
    background-image: url(${({bgImg})=> bgImg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    @media (max-width:768px) {
        width: 100%;
        height: 300px;
    }
`