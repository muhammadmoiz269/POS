import React, { useState } from "react";
import { Layout } from "antd";
import ProfileHeadSection from "../../Component/ProfileHeadSection/ProfileHeadSection";
import AntType from "../../Component/AntTypo/AntType";
import "./Customer.css";
import PrimaryCustomer from "../../Component/PrimaryCustomer/PrimaryCustomer";
import AdditionalCustomer from "../../Component/AdditionalCustomer/AdditionalCustomer";
import AddCompany from "../../Component/AddCompany/AddCompany";
import BillingAddress from "../../Component/BillingAddress/BillingAddress";
import AntButton from "../../Component/AntButton/AntButton";
import { firestore } from "../../Firebase/Firebase";

import firebase from "./../../Firebase/Firebase";

const { Content } = Layout;

const Customer = () => {
  const [isBtnClick, setisBtnClick] = useState(false);

  const addCustomer = (customerObj) => {
    // await firestore.collection("products").add(customerObj);
    setisBtnClick(true);
    // const userObj = {
    //   userInfo: customerObj,
    //   userAddress: customerObj,
    //   userCompany: "null",
    //   userAdditionalInfo: "null",
    // };
    console.log("hello", customerObj);
  };
  const addCustomerAddress = (customerAddress) => {
    setisBtnClick(true);

    console.log("hello", customerAddress);
  };
  return (
    <div>
      <Content className="customerContent">
        <div className="customerHeadSection">
          <AntType
            text="Add a Customer"
            fontSize={1}
            fontWeight={true}
            color="#1D1C1C"
          />
        </div>
        <PrimaryCustomer addCustomer={addCustomer} isBtnClick={isBtnClick} />
        <AdditionalCustomer addCustomer={addCustomer} />
        <AddCompany addCustomer={addCustomer} />
        <BillingAddress
          addCustomerAddress={addCustomerAddress}
          isBtnClick={isBtnClick}
        />
        <div className="BtnWidth" onClick={addCustomer}>
          <AntButton background="#00818F" color="#ffff" text="Submit" />
        </div>
      </Content>
    </div>
  );
};

export default Customer;
