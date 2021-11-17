import { Content } from "antd/lib/layout/layout";
import React, { useState } from "react";
import AntType from "../../Component/AntTypo/AntType";
import BuildQuote from "../../Component/BuildQuote/BuildQuote";
import QuoteManufacturer from "../../Component/QuoteManufacturer/QuoteManufacturer";
import "./Quotes.css";
import { Steps, Button, message, Row, Col } from "antd";
import ManufacturerDetails from "../../Component/ManufacturerDetails/ManufacturerDetails";
import ManufacturerMeasurement from "../../Component/ManufacturerMeasurement/ManufacturerMeasurement";
import Antimage from "../../Component/Antimage/Antimage";

const { Step } = Steps;

const Quotes = () => {
  const [current, setCurrent] = React.useState(0);
  const [logo, setLogo] = React.useState();

  const setImageLogo = (image) => {
    setLogo(image);
    // console.log("hello image", abc);
  };

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const steps = [
    {
      title: "First",
      content: <BuildQuote next={next} />,
    },
    {
      title: "Second",
      content: (
        <QuoteManufacturer
          next={next}
          prev={prev}
          setImageLogo={setImageLogo}
        />
      ),
    },
    {
      title: "third",
      content: <ManufacturerDetails next={next} prev={prev} />,
    },
    {
      title: "fourth",
      content: <ManufacturerMeasurement prev={prev} />,
    },
  ];
  return (
    <div>
      <Content className="quoteContent">
        <div className="quoteHeadSection">
          <Row>
            <Col xs={12} xl={12} className="quoteHeadGrid">
              <AntType
                text="Build a Quote"
                fontSize={1}
                fontWeight={true}
                color="#1D1C1C"
              />

              <AntType
                text={current > 0 && "Quote #: xxxxxxxxx"}
                fontSize={5}
                fontWeight={true}
                color="gray"
              />
            </Col>
            <Col className="logoSection" xs={12} xl={12}>
              {logo && current === 2 ? (
                <div className="imageAnimate">
                  <Antimage img={logo} height="70px" width="90px" />
                </div>
              ) : (
                <></>
              )}
            </Col>
          </Row>
        </div>
        <>
          <div className="steps-content">{steps[current].content}</div>
        </>
      </Content>
    </div>
  );
};

export default Quotes;
