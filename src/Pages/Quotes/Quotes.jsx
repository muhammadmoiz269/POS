import { Content } from "antd/lib/layout/layout";
import React, { useState } from "react";
import AntType from "../../Component/AntTypo/AntType";
import BuildQuote from "../../Component/BuildQuote/BuildQuote";
import QuoteManufacturer from "../../Component/QuoteManufacturer/QuoteManufacturer";

import "./Quotes.css";
import { Steps, Button, message } from "antd";
import ManufacturerDetails from "../../Component/ManufacturerDetails/ManufacturerDetails";

const { Step } = Steps;

const steps = [
  {
    title: "First",
    content: <BuildQuote />,
  },
  {
    title: "Second",
    content: <QuoteManufacturer />,
  },
  {
    title: "third",
    content: <ManufacturerDetails />,
  },
];

const Quotes = () => {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
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
          <div className="steps-action" style={{ marginTop: "1rem" }}>
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Save
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                onClick={() => message.success("Processing complete!")}
              >
                Done
              </Button>
            )}
            {current > 0 && (
              <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                Previous
              </Button>
            )}
          </div>
        </>
      </Content>
    </div>
  );
};

export default Quotes;
