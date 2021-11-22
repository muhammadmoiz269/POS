import React from "react";
import AdditionalCustomer from "../AdditionalCustomer/AdditionalCustomer";
import AntInput from "../AntInput/AntInput";
import AntSelect from "../AntSelect/AntSelect";
import AntType from "../AntTypo/AntType";
import "./ProductSampleForm.css";
import { Input, Form } from "antd";

const ProductSampleForm = () => {
  return (
    <div className="productFields">
      <div>
        <AntType
          text="Select Species"
          fontSize={5}
          fontWeight={true}
          color="#1D1C1C"
        />

        <AntSelect placeholder="Make a Selection" valueName="species" />

        <div>
          <AdditionalCustomer isProduct="true" />
        </div>
        <div className="forSpacing">
          <AntType
            text="Enter Color"
            fontSize={5}
            fontWeight={true}
            color="#1D1C1C"
          />
          <AntInput regex={/^[a-zA-Z_ ]*$/} placeholder="Blue" value="color" />
        </div>

        <div>
          <AdditionalCustomer isProduct="true" />
        </div>

        <div className="forSpacing">
          <AntType
            text="Enter SKU"
            fontSize={5}
            fontWeight={true}
            color="#1D1C1C"
          />
          <AntInput regex={/^[0-9]+$/} placeholder="000000000" value="sku" />
        </div>
        <div className="forSpacing">
          <AntType
            text="Enter Retail Price"
            fontSize={5}
            fontWeight={true}
            color="#1D1C1C"
          />
          <AntInput
            regex={/^[0-9]+$/}
            placeholder="$ 100"
            value="retailPrice"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductSampleForm;
