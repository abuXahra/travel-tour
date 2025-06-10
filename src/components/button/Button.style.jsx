import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const ButtonStyle = styled.button`
  background-color: ${({ bgColor }) => bgColor || "#FF6805"};
  color: ${({ textColor }) => textColor || "white"};
  border: ${({ btnBorder }) => btnBorder || "none"};
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: ${({ pd }) => pd || "14px 25px"};
  display: ${({ btnDisplay }) => btnDisplay || "flex"};
  font-size: ${({ fontSize }) => fontSize || "10px"};
  gap: 10px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  &:hover {
    background-color: ${({ hoverBgColor }) =>
      hoverBgColor || "rgb(25, 22, 199)"};
    color: ${({ hoverTextColor }) => hoverTextColor || "white"};
    transform: scale(1.05); /* Optional: adds a slight zoom effect */
    transition: all 0.3s ease; /* Smooth transition for hover */
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;
//rgb(25, 22, 199)

export const Loader = styled.div`
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top: 3px solid white;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: ${spin} 1s linear infinite;
`;
