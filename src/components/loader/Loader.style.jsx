import { BiLoaderCircle } from "react-icons/bi";
import styled, {keyframes} from "styled-components";


export const LoaderWrapper = styled.div`
    position: fixed;
    background-color: #ffffff;
    width: 100%;
    height: 105%;
    display: flex;
    /* flex-direction: column; */
    justify-content: center;   
    align-items: center;
    color: #0d3984cf;
    z-index: 9999;
    margin-top: -120px;
    gap: 10px;
    img{
           width: 200px;
    }


  @media (max-width: 768px) {
       img{
           width: 150px;
    }
  }
  `



export const LoaderIconWrapper = styled.div`
    display: flex;
    /* flex-direction: row; */
    gap: 10px;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 40px;
    width: 40px;
    bottom: 41.3%;
    right: 41.9%;

  @media (max-width: 768px) {
    bottom: 45%;
    right: 30%;
  }
`


const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const rotate2 = keyframes`
  100% {
    transform: rotate(0deg);
  }
  0% {
    transform: rotate(360deg);
  }
`;

// Create a styled component with the animation
export const RotatingIcon = styled(BiLoaderCircle)`
  animation: ${rotate2} 4s linear infinite;
  font-size: 40px; // Customize size as needed
  color: #FF6805;  // Customize color as needed
  position: absolute;
  display: none;

    @media (max-width: 768px) {
       font-size: 30px;
  }
`;

export const RotatingIcon2 = styled(BiLoaderCircle)`
  animation: ${rotate} 3s linear infinite;
  font-size: 60px; // Customize size as needed
  color: #0d3984cf;  // Customize color as needed
  position: absolute;
      @media (max-width: 768px) {
       font-size: 40px;
  }
`;



export const HrStyled = styled.hr`
  width:  100%;
  /* height: 2px; */
  border: 1px solid ${({bg})=> bg || "orange"};
`


