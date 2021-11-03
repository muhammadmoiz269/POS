import React, { useState, useEffect } from "react";
import AntInput from "../AntInput/AntInput";
import AntSelect from "../AntSelect/AntSelect";
import AntType from "../AntTypo/AntType";
import "../PrimaryCustomer/PrimaryCustomer.css";
import { Checkbox } from "antd";

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

const UserInfoFields = ({ isCompany, addCustomer, isBtnClick }) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [emailAddress, setemailAddress] = useState("");
  const [mobileNumber, setmobileNumber] = useState("");
  const [homeNumber, sethomeNumber] = useState("");

  const setUserInfo = (userInfo, value) => {
    switch (value) {
      case "firstName":
        return setfirstName(userInfo);

      case "lastName":
        return setlastName(userInfo);
      case "emailAddress":
        return setemailAddress(userInfo);
      case "mobileNumber":
        return setmobileNumber(userInfo);
      case "homeNumber":
        return sethomeNumber(userInfo);

      default:
        return "";
    }
  };
  var userObj = {
    firstName,
    lastName,
    emailAddress,
    mobileNumber,
    homeNumber,
  };
  if (isBtnClick === true) {
    addCustomer(userObj);
  }

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
            text={isCompany ? "*Company Name" : "*First Name"}
            fontSize={5}
            fontWeight={true}
            color="#1D1C1C"
          />
          <AntInput
            placeholder={isCompany ? "Company Name" : "*First Name"}
            setUserInfo={setUserInfo}
            value="firstName"
          />
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

            <AntInput
              placeholder="Last Name"
              setUserInfo={setUserInfo}
              value="lastName"
            />
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
        <AntInput
          placeholder="Email Address"
          setUserInfo={setUserInfo}
          value="emailAddress"
        />
      </div>
      <div className="nameFields">
        <div className="names">
          <AntType
            text="*Mobile Phone Number"
            fontSize={5}
            fontWeight={true}
            color="#1D1C1C"
          />
          <AntInput
            placeholder="416-555-000"
            setUserInfo={setUserInfo}
            value="mobileNumber"
          />
        </div>
        <div className="names">
          <AntType
            text={isCompany ? "Office Phone Number" : "Home Phone Number"}
            fontSize={5}
            fontWeight={true}
            color="#1D1C1C"
          />
          <AntInput
            placeholder="555-416-000"
            setUserInfo={setUserInfo}
            value="homeNumber"
          />
        </div>
      </div>
    </div>
  );
};

export default UserInfoFields;
