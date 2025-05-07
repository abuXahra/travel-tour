import React from "react";
import {
  ButtonLoaderWrapper,
  HrStyled,
  LoaderContent,
  LoaderIconWrapper,
  LoaderWrapper,
  LoadingContainer,
  LoadingPicture,
  Overlay,
  RotatingIcon,
  RotatingIcon2,
} from "./Loader.style";
import { Circles, ThreeDots } from "react-loader-spinner";
import loaderImage from "../../images/loader/flight_loader.gif";
import manzoLogo from "../../images/logo.png"

export default function Loader({ text }) {
  return (
    
      <LoaderWrapper>
          <img src={manzoLogo} alt="" srcset="" />
          <LoaderIconWrapper>
            <RotatingIcon />
            <RotatingIcon2 />
          </LoaderIconWrapper>
      </LoaderWrapper>
   
  );
}


// <div style={{width: "100%", display: "flex", flexDirection: "column", gap: "1px", marginTop:"-20px" }}>
//           <HrStyled/>
//           <HrStyled bg={'#0d3984cf'}/>
//         </div>
//         <span>{text}</span> 