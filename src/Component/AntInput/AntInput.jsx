import React from "react";
import "./AntInput.css";
import { Input } from "antd";

const AntInput = ({ placeholder }) => {
  return (
    <div>
      <Input placeholder={placeholder} size="middle" />
    </div>
  );
};

export default AntInput;
