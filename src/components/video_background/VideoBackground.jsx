

import React from 'react'
import { BackgroundVideoContainer, BackgroundVideoIframe, VideoBackgroundWrapper } from './VideoBackground.style';

export default function VideoBackground() {
    const videoUrl = 'https://www.youtube.com/watch?v=FvN4rm5sdsk';
    
    return (
        <VideoBackgroundWrapper>
            <BackgroundVideoContainer>
                
<iframe 

src="https://www.youtube.com/embed/FvN4rm5sdsk" 
title="Desire to Discover: Wuhan City Walking Adventure | China Megacity Travel Tour" 
frameborder="0" 
allow="autoplay; fullscreen" 
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                {/* <BackgroundVideoIframe
                     title="Background Video"
                     src={videoUrl}
                     frameBorder="0"
                     allow="autoplay; fullscreen"
                     allowFullScreen
                ></BackgroundVideoIframe> */}
            </BackgroundVideoContainer>
        </VideoBackgroundWrapper>

    );
}

