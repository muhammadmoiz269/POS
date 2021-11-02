import React from "react";
import AntInput from "../AntInput/AntInput";
import AntSelect from "../AntSelect/AntSelect";
import AntType from "../AntTypo/AntType";
import "../PrimaryCustomer/PrimaryCustomer.css";
import { Checkbox } from "antd";

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}
const UserInfoFields = ({ isCompany }) => {
  return (
    <div>
      {isCompany ? (
        <div>
          <AntType
            text="Company Name"
            fontSize={3}
            fontWeight={true}
            color="#1D1C1C"
          />

          <Checkbox onChange={onChange}>
            Use company name as customer name
          </Checkbox>
        </div>
      ) : (
        <></>
      )}

      <div className="nameFields">
        <div className="names">
          <AntType
            text={isCompany ? "Company Name" : "*First Name"}
            fontSize={5}
            fontWeight={true}
            color="#1D1C1C"
          />
          <AntInput placeholder="First Name" />
        </div>
        {isCompany ? (
          <></>
        ) : (
          <div className="names">
            <AntType
              text="*Last Name"
              fontSize={5}
              fontWeight={true}
              color="#1D1C1C"
            />
            <AntInput placeholder="Last Name" />
          </div>
        )}
      </div>
      <div className="names">
        <AntType
          text="*Email Address"
          fontSize={5}
          fontWeight={true}
          color="#1D1C1C"
        />
        <AntInput placeholder="Email Address" />
      </div>
      <div className="nameFields">
        <div className="names">
          <AntType
            text="Mobile Phone Number"
            fontSize={5}
            fontWeight={true}
            color="#1D1C1C"
          />
          <AntInput placeholder="416-555-000" />
        </div>
        <div className="names">
          <AntType
            text={isCompany ? "Office Phone Number" : "Home Phone Number"}
            fontSize={5}
            fontWeight={true}
            color="#1D1C1C"
          />
          <AntInput placeholder="555-416-000" />
        </div>
      </div>
    </div>
  );
};

export default UserInfoFields;
