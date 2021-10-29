import React from "react";
import { Typography } from "antd";

import { CaretRightOutlined } from "@ant-design/icons";

import AntType from "../AntTypo/AntType";
import Paragraph from "../Paragraph/Paragraph";
import "./Todo.css";
import Antavatar from "../Antavatar/Antavatar";
const { Text } = Typography;

const Todo = ({ item }) => {
  return (
    <div
      className="package"
      style={{
        borderLeft: `30px solid ${item.color}`,
      }}
    >
      <div style={{ paddingLeft: "2rem" }}>
        <AntType text={item.time} fontSize={4} color="black" align="left" />

        <Paragraph text={item.name} fontSize="1rem" color="gray" />
      </div>
      <div
        style={{
          float: "right",
          fontSize: `${item.fontsize}rem`,
          color: `${item.fontColor}`,
        }}
      >
        <Antavatar img={item.avatar} />
      </div>
    </div>
  );
};

export default Todo;
