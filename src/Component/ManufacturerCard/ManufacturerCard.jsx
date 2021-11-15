import React from "react";
import { Card, Col, Row } from "antd";
import AntType from "../AntTypo/AntType";
import { Link } from "react-router-dom";
import "./ManufacturerCard.css";
import Antimage from "../Antimage/Antimage";

const ManufacturerCard = ({ item }) => {
  return (
    <Card className="manufacturerCard">
      <Link>
        <div
          style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#ffff" }}
        >
          <Antimage img={item.image} />
        </div>
      </Link>
    </Card>
  );
};

export default ManufacturerCard;
