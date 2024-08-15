import styled from "styled-components";



export const LinkStyled =styled.a`
  width: 100%;
  text-decoration: none;
  color: #0D3984;
  gap: 10px;
  display: flex;
  flex-direction: column;

  

  
  @media (max-width:768px) {
    width: 100%;
    }
`
export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  /* width: 100%; */
  cursor: pointer;
  width: 270px;  /* Set the desired width */
  height: 200px; /* Set the desired height */
  overflow: hidden;
  border-radius: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  
  span{
    width: 100%;
  }

  img{
    
    object-fit: cover;
  }

  @media (max-width:768px) {
        width: 100%;
  img{
    height: 300px;
    width: 100%;
    border-radius: 20px;

  }
    }

`