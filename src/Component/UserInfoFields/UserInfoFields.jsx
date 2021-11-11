import React, { useState, useEffect } from "react";
import AntInput from "../AntInput/AntInput";
import AntSelect from "../AntSelect/AntSelect";
import AntType from "../AntTypo/AntType";
import "../PrimaryCustomer/PrimaryCustomer.css";
import { Checkbox } from "antd";

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

const UserInfoFields = ({
  isCompany,
  setUserInfo,
  isAdditionalUser,
  requiredUser,
}) => {
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
          <AntInput
            placeholder={isCompany ? "Company Name" : "First Name"}
            regex={/^[a-zA-Z_ ]*$/}
            isRequired={requiredUser}
            setUserInfo={setUserInfo}
            value={
              isAdditionalUser
                ? "addCustomerFirstName"
                : isCompany
                ? "companyName"
                : "firstName"
            }
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
              isRequired={requiredUser}
              regex={/^[A-Za-z]+$/}
              placeholder="Last Name"
              setUserInfo={setUserInfo}
              value={isAdditionalUser ? "addCustomerLastName" : "lastName"}
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
          isRequired={requiredUser}
          regex={/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}
          placeholder="Email Address"
          setUserInfo={setUserInfo}
          value={
            isAdditionalUser
              ? "addCustomerEmailAddress"
              : isCompany
              ? "companyEmailAddress"
              : "emailAddress"
          }
        />
      </div>
      <div className="nameFields">
        <div className="names">
          <AntType
            text="Mobile Phone Number"
            fontSize={5}
            fontWeight={true}
            color="#1D1C1C"
          />
          <AntInput
            regex={/^[0-9]+$/}
            placeholder="416-555-000"
            setUserInfo={setUserInfo}
            value={
              isAdditionalUser
                ? "addCustomerMobileNumber"
                : isCompany
                ? "companyMobileNumber"
                : "mobileNumber"
            }
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
            regex={/^[0-9]+$/}
            placeholder="555-416-000"
            setUserInfo={setUserInfo}
            value={
              isAdditionalUser
                ? "addCustomerHomeNumber"
                : isCompany
                ? "companyOfficeNumber"
                : "homeNumber"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default UserInfoFields;
