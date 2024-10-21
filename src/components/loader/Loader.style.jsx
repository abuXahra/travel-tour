import styled from "styled-components";


export const LoaderWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: blue;

    h3{
      margin-top: -20px;
    }


img {
  width: 40px; /* Adjust size as needed */
  animation: roll 1s linear infinite; //Rolling animation
}

@keyframes roll {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
  `



// export const Overlay = styled.div`
//     background-color: #000000d0;
//     width: 100%;
//     height: 100vh;
    
// `



// export const LoadingContainer = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   gap: 10px;

  
// `
  
 