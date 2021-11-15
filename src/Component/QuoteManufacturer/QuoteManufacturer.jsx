import React from "react";
import AntType from "../AntTypo/AntType";
import { Row, Col } from "antd";
import ManufacturerCard from "../ManufacturerCard/ManufacturerCard";
import logo1 from "../../assests/images/logo1.jpg";
import logo2 from "../../assests/images/logo2.png";
import logo3 from "../../assests/images/logo3.jpg";
import AntButton from "../AntButton/AntButton";
import "./QuoteManufacturer.css";
import CustomerDetailBox from "../CustomerDetailBox/CustomerDetailBox";

const product = [
  { title: "Add a Customer", image: logo1 },
  { title: "Add a Product", image: logo2 },
  { title: "Add a Customer", image: logo3 },

  { title: "Add a Customer", image: logo1 },
  { title: "Add a Product", image: logo2 },
  { title: "Add a Customer", image: logo3 },

  { title: "Add a Customer", image: logo1 },
  { title: "Add a Product", image: logo2 },
  { title: "Add a Customer", image: logo3 },
];

const QuoteManufacturer = () => {
  return (
    <div>
      <div className="verticalGap">
        <AntType
          text="Select Manufacturer"
          fontSize={4}
          fontWeight={true}
          color="gray"
        />
      </div>
      <Row className="verticalGap" gutter={[24, 24]}>
        <Col xl={14} lg={14} md={24} className="gutter-row">
          <Row gutter={[16, 16]}>
            {product.map((items) => {
              return (
                <Col
                  className="gutter-row"
                  xl={8}
                  lg={8}
                  md={12}
                  sm={24}
                  xs={24}
                >
                  <ManufacturerCard item={items} />
                </Col>
              );
            })}
          </Row>
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

export default QuoteManufacturer;
