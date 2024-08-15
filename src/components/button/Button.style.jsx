
import styled from "styled-components"


export const ButtonStyle = styled.button`
background-color: ${({bgColor})=> bgColor || '#FF6805'};
color: ${({textColor})=> textColor || 'white' };
border: ${({btnBorder})=> btnBorder || 'none'};
border-top-left-radius: 10px;
border-bottom-right-radius: 10px;
padding: 14px 25px;
display: flex;
gap: 10px;
cursor: pointer;

`