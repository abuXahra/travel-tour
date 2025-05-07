import React from "react";
import { ButtonStyle, Loader } from "./Button.style";

export default function Button({
  onClick,
  text,
  textColor,
  bgColor,
  btnBorder,
  Icon,
  rightIcon,
  pd,
  loading,
  btnDisplay,
  fontSize
}) {
  return (
    <ButtonStyle
      textColor={textColor}
      bgColor={bgColor}
      btnBorder={btnBorder}
      type="submit"
      onClick={onClick}
      pd={pd}
      disabled={loading}
      btnDisplay={btnDisplay}
      fontSize={fontSize}
    >
      {loading ? (
        <Loader />
      ) : (
        <>
          {Icon} {text} {rightIcon && rightIcon}
        </>
      )}
    </ButtonStyle>
  );
}
