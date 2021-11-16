import { Content } from "antd/lib/layout/layout";
import React, { useState } from "react";
import AntType from "../../Component/AntTypo/AntType";
import BuildQuote from "../../Component/BuildQuote/BuildQuote";
import QuoteManufacturer from "../../Component/QuoteManufacturer/QuoteManufacturer";

import "./Quotes.css";
import { Steps, Button, message } from "antd";
import ManufacturerDetails from "../../Component/ManufacturerDetails/ManufacturerDetails";
import ManufacturerMeasurement from "../../Component/ManufacturerMeasurement/ManufacturerMeasurement";

const { Step } = Steps;

const Quotes = () => {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(2);
  };
  const steps = [
    {
      title: "First",
      content: <BuildQuote next={next} />,
    },
    {
      title: "Second",
      content: <QuoteManufacturer next={next} />,
    },
    {
      title: "third",
      content: <ManufacturerDetails next={next} />,
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
          <div>
            <AntType
              text="Build a Quote"
              fontSize={1}
              fontWeight={true}
              color="#1D1C1C"
            />
          </div>
          <div className="quoteNumber">
            <AntType
              text="Quote #: xxxxxxxxx"
              fontSize={5}
              fontWeight={true}
              color="gray"
            />
          </div>
        </div>
        <>
          <div className="steps-content">{steps[current].content}</div>
        </>
      </Content>
    </div>
  );
};

export default Quotes;
