import styled from "styled-components"


export const SliderWrapper=styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;
   

    
.slick-slider {
  position: relative;
  display: flex;
  align-items: stretch; // Stretch slider to fit content height
}

.slick-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%; // Make slides take full height of the container
}

.slick-slide div {
  max-height: 100%; // Prevent content from exceeding container height
  overflow: hidden; // Handle overflow if content is too large
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
}

.slick-dots {
  bottom: -30px; // Adjust dot position if needed
}

.slick-arrow {
  z-index: 1; // Ensure arrows are above other elements
}
    /* .slick-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  } */

  /* .slick-slide div {
    padding: 0 10px; /* Horizontal padding for spacing between items */
  /* } */ */

  .slick-slide h3 {
    margin: 0; /* Remove default margin from items if needed */
  }
  

  @media (max-width: 768px) {
    .slick-slide div {
      padding: 0 5px; /* Less padding for smaller screens */
    }
  }
`

export const NextCustomArrow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    color: black;
    border-radius: 50%;
    margin-top: 40px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    position: absolute;
    right: 10px;
    top: 25%;
    /* /* transform: translateY(-50%); */
    z-index: 1;
    cursor: pointer;
    font-size: 12px;
`


export const PrevCustomArrow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    color: black;
    border-radius: 50%;
    margin-top: 40px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    position: absolute;
    left: -10px;
    top: 25%;
    /* transform: translateY(-50%); */
    z-index: 1;
    cursor: pointer;
    font-size: 12px;
`


