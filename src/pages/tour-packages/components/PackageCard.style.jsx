




import styled from 'styled-components';

export const TourPackageCard = styled.div`
  width:32.2%;
  height: ${({ bgHeight }) => bgHeight || 'auto'};
  overflow: hidden;
  border-radius: 20px;
  transition: all 0.3s ease;
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;

  &:hover .background {
    transform: ${({scaling})=> scaling || 'scale(1.1)'};
  }


  @media (max-width:768px) {
    width: 100%;

}


`;

export const TourPackageBackground = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${({ bg }) => bg}); /* Replace with your hotel background image URL */
  background-size: cover;
  background-position: center;
  position: relative;
  top: 0;
  left: 0;
  transition: transform 0.5s ease; /* Smooth animation for scaling */
  transform-origin: center center;
  /* z-index: 0; */
`;

export const TourPackageOverlay = styled.div`
  position: relative;
  color: white;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
  display: flex;
  flex-direction: column;
  justify-content:end;
  /* z-index: 1; */
  transition: all 0.3s ease;
`;


export const PackageContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 10px;
  padding: 20px;


  h3{
    color: black;
  }
`

export const TourPackageTitle = styled.div`
  color: black;
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  width: 100%;
`

