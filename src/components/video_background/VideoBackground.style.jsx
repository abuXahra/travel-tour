import styled from "styled-components"



export const VideoBackgroundWrapper = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
`

export const BackgroundVideoContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1; /* Ensure the video is behind other content */
`
  
export const BackgroundVideoIframe = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw; /* Ensure full viewport width */
    height: 100vh; /* Ensure full viewport height */
    border: 0; /* Remove border */
    object-fit: cover; /* Cover the container */
` 

  
  