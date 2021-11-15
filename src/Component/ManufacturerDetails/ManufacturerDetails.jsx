import React from "react";
import AntType from "../AntTypo/AntType";
import { Row, Col } from "antd";
import ManufacturerCard from "../ManufacturerCard/ManufacturerCard";
import logo1 from "../../assests/images/logo1.jpg";
import logo2 from "../../assests/images/logo2.png";
import logo3 from "../../assests/images/logo3.jpg";
import AntButton from "../AntButton/AntButton";
import "./ManufacturerDetails.css";
import CustomerDetailBox from "../CustomerDetailBox/CustomerDetailBox";
import AntAccordian from "../AntAccordian/AntAccordian";

const productItems = [
  {
    title: "Select Flooring",
    radioItem: [{ radio: "Hardwood", value: "1" }],
  },
  {
    title: "Species",
    radioItem: [
      { radio: "American Wallnut", value: "1" },
      { radio: "Hard Mapple", value: "2" },
      { radio: "Hickory", value: "3" },
      { radio: "Red Oak", value: "4" },
      { radio: "White Ash", value: "5" },
      { radio: "White Oak", value: "6" },
      { radio: "Yellow Birch", value: "7" },
    ],
  },
  {
    title: "Look / Grade",
    radioItem: [
      { radio: "Authentic", value: "1" },
      { radio: "Distinction", value: "2" },
      { radio: "Pro", value: "3" },
      { radio: "Select & Better", value: "4" },
    ],
  },

  {
    title: "Platform",
    radioItem: [
      { radio: "Engineered 1/2", value: "1" },
      { radio: "Engineered 3/4", value: "2" },
      { radio: "Solid", value: "3" },
    ],
  },
  {
    title: "Collection",
    radioItem: [
      { radio: "Atmoshphere", value: "1" },
      { radio: "Design", value: "2" },
      { radio: "Origins", value: "3" },
    ],
  },
  {
    title: "Gloss",
    radioItem: [
      { radio: "Matte", value: "1" },
      { radio: "Matte - Brished", value: "2" },
      { radio: "Satin", value: "3" },
    ],
  },

  {
    title: "Width",
    radioItem: [
      { radio: "21/4'", value: "1" },
      { radio: "31/4'", value: "2" },
      { radio: "41/4'", value: "3" },
      { radio: "5'", value: "4" },
      { radio: "6 1/2'", value: "5" },
      { radio: "2 1/2'", value: "6" },
    ],
  },
  {
    title: "Finish",
    radioItem: [{ radio: "Mercier Generations", value: "1" }],
  },
];

const ManufacturerDetails = () => {
  return (
    <div>
      <Row className="verticalGap" gutter={[24, 24]}>
        <Col xl={14} lg={14} md={24} className="gutter-row">
          {productItems.map((items) => {
            return <AntAccordian items={items} />;
          })}
        </Col>
        <Col xl={10} lg={10} md={24}>
          <CustomerDetailBox />
        </Col>
      </Row>
      <div className="verticalGap">
        <AntButton
          background="#00818F"
          color="#ffff"
          text="Save"
          padding="0.7rem 5rem"
        />
      </div>
    </div>
  );
};

export default ManufacturerDetails;
