import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

const AntType = ({ fontSize, color, fontWeight, text, align, margin }) => {
  return (
    <div style={{ textAlign: align }}>
      <Title
        level={fontSize}
        strong={fontWeight}
        style={{ color: color, margin: margin }}
      >
        {text}
      </Title>
    </div>
  );
};

export default AntType;
