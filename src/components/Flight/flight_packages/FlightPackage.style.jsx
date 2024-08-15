


import styled from 'styled-components';

export const FlightPackageCard = styled.div`
  position: relative;
  width: 100%;
  height: ${({ bgHeight }) => bgHeight || '350px'};
  overflow: hidden;
  border-radius: 20px;
  transition: all 0.3s ease;
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);


  &:hover .background {
    transform: ${({scaling})=> scaling || 'scale(1.1)'};
  }

  &:hover .title {
    transform: translateY(-30%);
    color: white;
  }

  &:hover .show-price{
    display: flex;
  }
`;

export const FlightPackageBackground = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({ bg }) => bg}); /* Replace with your hotel background image URL */
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.5s ease; /* Smooth animation for scaling */
  transform-origin: center center;
  /* z-index: 0; */
`;

export const FlightPackageOverlay = styled.div`
  position: absolute;
  color: white;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
  display: flex;
  flex-direction: column;
  align-items:baseline;
  justify-content:end;
  /* z-index: 1; */
  transition: all 0.3s ease;
`;


export const PackageContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 0px 20px;
  margin: 0;
  position: absolute;
  bottom: 20px;
  transition: all 0.3s ease;
  z-index: 2;
  align-items: center;
  transition: transform 0.3s ease, color 0.3s ease;

  h3{
    color: white;
    text-align: center;
  }
`
export const PackagePrice =styled.div `
   width: 100%;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;  

    @media (max-width:768px) {
       display: flex;
    }
`
export const FlightPackageTitle = styled.div`
  color: white;
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  width: 100%;
`

export const Explore = styled.p`
    cursor: pointer;
    font-weight: bold;
    a{
      color: white;
    }
`