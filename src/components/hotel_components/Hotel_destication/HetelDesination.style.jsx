


import styled from 'styled-components';

export const HotelDestinationCard = styled.div`
  position: relative;
  width: 100%;
  height: ${({bgHeight})=>bgHeight || '350px'};
  overflow: hidden;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);


  &:hover .background {
    transform: scale(1.1);
  }

  &:hover .title {
    transform: translateY(-100%);
    color: white;
  }
`;

export const HotelDestinationBackground = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({bg})=>bg}); /* Replace with your hotel background image URL */
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.5s ease; /* Smooth animation for scaling */
  transform-origin: center center;
  /* z-index: 0; */
`;

export const HotelDestinationOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  /* z-index: 1; */
  transition: all 0.3s ease;
`;

export const HotelDestinationTitle = styled.h2`
  color: white;
  font-size: 1.5em;
  margin: 0;
  position: absolute;
  bottom: 10%;
  transition: all 0.3s ease;
  z-index: 2;
`
