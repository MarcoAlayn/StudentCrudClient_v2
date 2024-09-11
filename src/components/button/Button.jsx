import React from "react";
import { Primary, Secondary } from "./ButtonStyles";

const Button = ({ style, children, onClick, isDisable }) => {
  return (
    <>
      {style === "primary" && (
        <Primary disabled={isDisable} onClick={!isDisable ? onClick : null}>
          {children}
        </Primary>
      )}
      {style === "secondary" && (
        <Secondary disabled={isDisable} onClick={!isDisable ? onClick : null}>
          {children}
        </Secondary>
      )}
    </>
  );
};

export default Button;
