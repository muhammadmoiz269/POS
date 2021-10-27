import React from "react";
import "./Addcard.css";
import { Card, Col, Row } from "antd";
import Paragraph from "../../Component/Paragraph/Paragraph";
import AntType from "../AntTypo/AntType";

const Addcard = ({ item }) => {
  return (
    <Card className="antcard">
      <div style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#ffff" }}>
        {item.icon}
      </div>

      <AntType text={item.title} fontSize={5} color="white" align="left" />
    </Card>
  );
};

export default Addcard;
