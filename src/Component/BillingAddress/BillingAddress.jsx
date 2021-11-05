import React, { useState, useEffect } from "react";
import AntInput from "../AntInput/AntInput";
import AntSelect from "../AntSelect/AntSelect";
import AntType from "../AntTypo/AntType";
import "../PrimaryCustomer/PrimaryCustomer.css";
import { Checkbox } from "antd";
import "./BillingAddress.css";

import { Input } from "antd";

const { TextArea } = Input;
function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

const BillingAddress = ({ setUserInfo }) => {
  return (
    <div>
      <div>
        <div>
          <AntType
            text="Billing Address"
            fontSize={5}
            fontWeight={true}
            color="#1D1C1C"
          />

          <Checkbox onChange={onChange}>
            Add a different shipping address
          </Checkbox>
        </div>

        <div className="nameFields">
          <div className="names">
            <AntType
              text="Address"
              fontSize={5}
              fontWeight={true}
              color="#1D1C1C"
            />
            <AntInput
              placeholder="10 brown street"
              setUserInfo={setUserInfo}
              value="homeAddress"
            />
          </div>
        </div>
        <div className="names">
          <AntType
            text="Appartment, Suite etc"
            fontSize={5}
            fontWeight={true}
            color="#1D1C1C"
          />
          <AntInput
            placeholder="Suite No 302"
            setUserInfo={setUserInfo}
            value="appartment"
          />
        </div>
        <div className="nameFields">
          <div className="zip">
            <AntType
              text="Zip Code"
              fontSize={5}
              fontWeight={true}
              color="#1D1C1C"
            />
            <AntInput
              placeholder="416-555-000"
              setUserInfo={setUserInfo}
              value="zip"
            />
          </div>
          <div className="city">
            <AntType
              text="City"
              fontSize={5}
              fontWeight={true}
              color="#1D1C1C"
            />
            <AntInput
              placeholder="555-416-000"
              setUserInfo={setUserInfo}
              value="city"
            />
          </div>
          <div className="state">
            <AntType
              text="State / Province"
              fontSize={5}
              fontWeight={true}
              color="#1D1C1C"
            />
            <AntInput
              placeholder="555-416-000"
              setUserInfo={setUserInfo}
              value="province"
            />
          </div>
        </div>
        <div className="nameFields">
          <div className="names">
            <AntType
              text="How did you hear about us ?"
              fontSize={5}
              fontWeight={true}
              color="#1D1C1C"
            />
            <AntSelect placeholder="Make a Selection" />
          </div>
        </div>
        <div className="nameFields">
          <div className="names">
            <AntType
              text="Customer notes"
              fontSize={5}
              fontWeight={true}
              color="#1D1C1C"
            />
            <TextArea
              // style={{ width: "100%", maxWidth: "100%" }}

              rows={6}
              onChange={(e) => setUserInfo(e.target.value, "notes")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingAddress;
