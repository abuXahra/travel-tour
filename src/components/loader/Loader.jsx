import React from "react";
import {
  LoaderContent,
  LoaderWrapper,
  LoadingContainer,
  LoadingPicture,
  Overlay,
} from "./Loader.style";
import { Circles, ThreeDots } from "react-loader-spinner";
import loaderImage from "../../images/rb_57.png";

export default function Loader({ text }) {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        // backgroundColor: "#fff",
        zIndex: 1,
        height: "100%",
      }}
    >
      <LoaderWrapper>
        {/* <img src={loaderImage} alt="" srcset="" /> */}
        <ThreeDots
          visible={true}
          height="100"
          width="100"
          color="blue"
          radius="10"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        <h3>{text}</h3>
      </LoaderWrapper>
    </div>
  );
}
