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
  RotatingContainer,
  RotatingIcon,

} from "./Loader.style";
import { Circles, ThreeDots } from "react-loader-spinner";
import loaderImage from "../../images/loader/flight_loader.gif";
import manzoLogo from "../../images/logos/flight_logo2.PNG";

export default function Loader2({ text }) {
  return (
    <LoaderWrapper>
   
        <img src={manzoLogo} alt="" srcset="" />
        <LoaderIconWrapper>
                <RotatingContainer/>
        </LoaderIconWrapper>
      
    </LoaderWrapper>
  );
}
