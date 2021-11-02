import React from "react";
import AntInput from "../AntInput/AntInput";
import AntSelect from "../AntSelect/AntSelect";
import AntType from "../AntTypo/AntType";
import UserInfoFields from "../UserInfoFields/UserInfoFields";
import "./PrimaryCustomer.css";

const PrimaryCustomer = () => {
  return (
    <div className="primaryCustomer">
      <AntType
        text="Primray Customer"
        fontSize={4}
        fontWeight={true}
        color="#1D1C1C"
      />
      <div className="account">
        <AntType
          text="Account Manager"
          fontSize={5}
          fontWeight={true}
          color="#1D1C1C"
        />
        <AntSelect placeholder="Make a Selection" />
      </div>
      <div>
        <AntType
          text="Fields marked with * are mandatory"
          fontSize={5}
          fontWeight={true}
          color="#1D1C1C"
        />
        <UserInfoFields />
      </div>
    </div>
  );
};

export default PrimaryCustomer;