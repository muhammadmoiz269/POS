import { Content } from "antd/lib/layout/layout";
import React, { useState } from "react";
import AntType from "../../Component/AntTypo/AntType";
import BuildQuote from "../../Component/BuildQuote/BuildQuote";
import QuoteManufacturer from "../../Component/QuoteManufacturer/QuoteManufacturer";
import "./Quotes.css";

const Quotes = () => {
  const [isRender, setisRender] = useState(false);
  return (
    <div>
      <Content className="quoteContent">
        <div className="quoteHeadSection">
          <AntType
            text="Build a Quote"
            fontSize={1}
            fontWeight={true}
            color="#1D1C1C"
          />
        </div>
        {isRender ? <BuildQuote /> : <QuoteManufacturer />}
      </Content>
    </div>
  );
};

export default Quotes;
