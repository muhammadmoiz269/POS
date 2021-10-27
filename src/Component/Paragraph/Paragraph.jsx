import React from "react";
import { Typography, Space } from "antd";

const { Text, Link } = Typography;

const Paragraph = ({
  text,
  fontSize,
  color,
  bold,
  align,
  borderBottom,
  padding,
}) => {
  return (
    <div
      style={{
        fontSize: fontSize,
        fontWeight: bold,
        textAlign: align,
        borderBottom: borderBottom,
        padding: padding,
      }}
    >
      <Text style={{ color: color }}>{text}</Text>
    </div>
  );
};

export default Paragraph;
