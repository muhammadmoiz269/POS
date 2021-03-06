import React from "react";
import { Button, Radio } from "antd";
const AntButton = ({ color, background, text, padding }) => {
  return (
    <div
      style={{
        borderRadius: "5px",
        background: background,
        color: color,

        padding: padding ? padding : "0.7rem 2rem",
      }}
    >
      {text}
    </div>
  );
};

export default AntButton;
