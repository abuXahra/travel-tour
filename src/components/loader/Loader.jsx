import React from "react";
import {
  HrStyled,
  LoaderContent,
  LoaderWrapper,
  LoadingContainer,
  LoadingPicture,
  Overlay,
} from "./Loader.style";
import { Circles, ThreeDots } from "react-loader-spinner";
import loaderImage from "../../images/loader/flight_loader.gif";

export default function Loader({ text }) {
  return (
    
      <LoaderWrapper>
        <img src={loaderImage} alt="" srcset="" />
        <div style={{width: "100%", display: "flex", flexDirection: "column", gap: "1px", marginTop:"-20px" }}>
          <HrStyled/>
          <HrStyled bg={'#0d3984cf'}/>
        </div>
        <span>{text}</span>
      </LoaderWrapper>
   
  );
}
