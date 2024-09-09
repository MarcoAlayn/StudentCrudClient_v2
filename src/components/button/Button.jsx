import React from "react";
import { Primary, Secondary } from "./ButtonStyles";

const Button = ({ style, children, onClick }) => {
  return (
    <>
      {style === "primary" && <Primary onClick={onClick}>{children}</Primary>}
      {style === "secondary" && (
        <Secondary onClick={onClick}>{children}</Secondary>
      )}
    </>
  );
};

export default Button;
