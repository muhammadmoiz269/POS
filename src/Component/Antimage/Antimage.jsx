import React from "react";
import { Image } from "antd";
const Antimage = ({ img }) => {
  return (
    <div>
      <img src={img} height="40px" width="70px" alt="" />
    </div>
  );
};

export default Antimage;
