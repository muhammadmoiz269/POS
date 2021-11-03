import React, { useState, useEffect } from "react";
import "./AntInput.css";
import { Input } from "antd";

const AntInput = ({ placeholder, value, setUserInfo }) => {
  return (
    <Input
      placeholder={placeholder}
      size="middle"
      onChange={(e) => setUserInfo(e.target.value, value)}
    />
  );
};

export default AntInput;
