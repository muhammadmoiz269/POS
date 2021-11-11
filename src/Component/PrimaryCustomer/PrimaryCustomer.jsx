import React from "react";
import AntInput from "../AntInput/AntInput";
import AntSelect from "../AntSelect/AntSelect";
import AntType from "../AntTypo/AntType";
import UserInfoFields from "../UserInfoFields/UserInfoFields";
import { Input, Form } from "antd";

import "./PrimaryCustomer.css";

const PrimaryCustomer = ({ setUserInfo }) => {
  return (
    <div>
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
        <Form.Item name="accountManager">
          <AntSelect
            placeholder="Make a Selection"
            setUserInfo={setUserInfo}
            valueName="accountManager"
          />
        </Form.Item>
      </div>
      <div>
        <AntType
          text="Fields marked with * are mandatory"
          fontSize={5}
          fontWeight={true}
          color="#1D1C1C"
        />
        <UserInfoFields setUserInfo={setUserInfo} requiredUser="true" />
      </div>
    </div>
  );
};

export default PrimaryCustomer;
