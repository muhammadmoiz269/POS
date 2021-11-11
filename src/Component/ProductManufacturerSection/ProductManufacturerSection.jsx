import React from "react";
import AntButton from "../AntButton/AntButton";
import AntInput from "../AntInput/AntInput";
import AntSelect from "../AntSelect/AntSelect";
import AntType from "../AntTypo/AntType";
import AntUpload from "../AntUpload/AntUpload";
import Paragraph from "../Paragraph/Paragraph";
import { Input, Form } from "antd";

import "./ProductManufacturerSection.css";
const ProductManufacturerSection = ({ setProductInfo }) => {
  return (
    <div>
      <div className="nameFields">
        <div className="names">
          <AntType
            text="Enter Manufacturer"
            fontSize={5}
            fontWeight={true}
            color="#1D1C1C"
          />
          <AntInput
            regex={/^[a-zA-Z_ ]*$/}
            placeholder="manufacturer"
            setProductInfo={setProductInfo}
            value="manufacturer"
          />

          <div className="uploadImage">
            <Form.Item name="upload">
              <AntUpload setProductInfo={setProductInfo} value="productImage" />
            </Form.Item>

            <div>
              <AntType
                text="Upload Manufacturer logo"
                fontSize={5}
                fontWeight={true}
                color="#1D1C1C"
              />
              <Paragraph
                text="Photo should be atleast 300px x 300px"
                fontSize="0.9rem"
                color="gray"
              />

              <AntButton
                background="#ffff"
                color="#00818F"
                text="Upload Image"
                padding="0.2rem 0.5rem"
              />
            </div>

            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductManufacturerSection;
