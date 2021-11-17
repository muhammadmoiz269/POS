import React from "react";
import { Row, Col, Button } from "antd";

import AntButton from "../AntButton/AntButton";
import AntType from "../AntTypo/AntType";
import CustomerDetailBox from "../CustomerDetailBox/CustomerDetailBox";

import AntInput from "../AntInput/AntInput";
import "./ManufacturerMeasurement.css";

import {
  DownOutlined,
  UpOutlined,
  PlusOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import AddMeasurement from "../AddMeasurement/AddMeasurement";

const ManufacturerMeasurement = ({ prev }) => {
  const setPrevPage = () => {
    prev();
  };
  return (
    <div>
      <div className="verticalGap">
        <AntType
          text="Add measurements"
          fontSize={4}
          fontWeight={true}
          color="gray"
        />
      </div>
      <Row className="verticalGap" gutter={[24, 24]}>
        <Col xl={14} lg={14} md={24} className="gutter-row">
          <Row gutter={[24, 24]}>
            <Col xl={7} lg={7} md={24}>
              <AntType
                text="Square Footage"
                fontSize={5}
                fontWeight={true}
                color="#004D8B"
              />
              <AntInput placeholder="1200 sq ft" value="additionalColor" />
            </Col>
            <Col xl={10} lg={10} md={24}>
              <AntType
                text="Description of the items"
                fontSize={5}
                fontWeight={true}
                color="#004D8B"
              />
              <AntInput placeholder="Basement" value="additionalColor" />
            </Col>
            <Col xl={7} lg={7} md={24}>
              <AntType
                text="Cutting and Waste"
                fontSize={5}
                fontWeight={true}
                color="#004D8B"
              />
              <AntInput placeholder="120 sq ft" value="additionalColor" />
            </Col>
          </Row>
          <Row>
            <AddMeasurement
              text="Add width and length of room"
              downIcon={<UpOutlined />}
              upIcon={<DownOutlined />}
              col1={10}
              col2={10}
            />
          </Row>
          <Row>
            <AddMeasurement
              text="Add another measurement"
              upIcon={<PlusOutlined />}
              downIcon={<MinusOutlined />}
              col1={8}
              col2={14}
              isAddAnother="true"
            />
          </Row>
          <div className="btnGap">
            <Button
              onClick={setPrevPage}
              type="primary"
              htmlType="submit"
              style={{
                background: "#00818F",
                color: "#ffff",
                border: "1px solid #00818F",
              }}
            >
              Back
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                background: "#00818F",
                color: "#ffff",
                border: "1px solid #00818F",
              }}
            >
              Save
            </Button>
          </div>
        </Col>
        <Col xl={10} lg={10} md={24}>
          <CustomerDetailBox />
        </Col>
      </Row>
    </div>
  );
};

export default ManufacturerMeasurement;
