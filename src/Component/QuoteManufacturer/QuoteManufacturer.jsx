import React, { useState, useEffect } from "react";
import AntType from "../AntTypo/AntType";
import { Row, Col, Button } from "antd";
import ManufacturerCard from "../ManufacturerCard/ManufacturerCard";
import AntButton from "../AntButton/AntButton";
import "./QuoteManufacturer.css";

import { Spin } from "antd";

import { firestore } from "./../../Firebase/Firebase";

import CustomerDetailBox from "../CustomerDetailBox/CustomerDetailBox";

const QuoteManufacturer = ({ next, prev, setImageLogo }) => {
  const [manufacturers, setManufacturers] = useState([]);

  useEffect(() => {
    fetchManufacturers();
  }, []);

  const fetchManufacturers = async () => {
    try {
      var query = await firestore.collection("products").get();
      var products = [];
      query.docs.forEach((doc) => {
        products.push({ ...doc.data(), id: doc.id });
      });

      setManufacturers(products);
    } catch (error) {
      console.log(error);
    }
  };

  const setNextPage = () => {
    next();
  };
  const setPrevPage = () => {
    prev();
  };
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
            {manufacturers.length > 0 ? (
              manufacturers.map((items) => {
                return (
                  <Col
                    className="gutter-row"
                    xl={8}
                    lg={8}
                    md={12}
                    sm={24}
                    xs={24}
                  >
                    <ManufacturerCard
                      item={items}
                      setImageLogo={setImageLogo}
                      next={next}
                    />
                  </Col>
                );
              })
            ) : (
              <Spin />
            )}
          </Row>
          <div className="btnGap">
            <Button onClick={setPrevPage}>Back</Button>

            <Button onClick={setNextPage}>Save</Button>
          </div>
        </Col>
        <Col xl={10} lg={10} md={24}>
          <CustomerDetailBox />
        </Col>
      </Row>
    </div>
  );
};

export default QuoteManufacturer;
