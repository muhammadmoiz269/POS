import { Col, Row } from "antd";
import React from "react";
import AntButton from "../AntButton/AntButton";
import AntType from "../AntTypo/AntType";
import CustomerDetailBox from "../CustomerDetailBox/CustomerDetailBox";

import AntInput from "../AntInput/AntInput";

import {
  DownOutlined,
  UpOutlined,
  PlusOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import AddMeasurement from "../AddMeasurement/AddMeasurement";

const ManufacturerMeasurement = () => {
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
                text="Description"
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
          <div className="verticalGap">
            <AntButton
              background="#00818F"
              color="#ffff"
              text="Save"
              padding="0.7rem 5rem"
            />
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
