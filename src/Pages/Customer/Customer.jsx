import React, { useEffect, useState } from "react";
import { Form, Layout } from "antd";
import ProfileHeadSection from "../../Component/ProfileHeadSection/ProfileHeadSection";
import AntType from "../../Component/AntTypo/AntType";
import "./Customer.css";
import PrimaryCustomer from "../../Component/PrimaryCustomer/PrimaryCustomer";
import AdditionalCustomer from "../../Component/AdditionalCustomer/AdditionalCustomer";
import AddCompany from "../../Component/AddCompany/AddCompany";
import BillingAddress from "../../Component/BillingAddress/BillingAddress";
import AntButton from "../../Component/AntButton/AntButton";
import { firestore } from "../../Firebase/Firebase";

import { useForm } from "antd/lib/form/Form";

const { Content } = Layout;

const Customer = () => {
  const [form, setForm] = useState({
    accountManager: "",
    firstName: "",
    lastName: "",
    emailAddress: "",
    mobileNumber: "",
    homeNumber: "",
    addCustomerFirstName: "",
    addCustomerLastName: "",
    addCustomerEmailAddress: "",
    addCustomerHomeNumber: "",
    addCustomerMobileNumber: "",
    companyName: "",
    companyEmailAddress: "",
    companyMobileNumber: "",
    companyOfficeNumber: "",
    homeAddress: "",
    appartment: "",
    zip: "",
    city: "",
    province: "",
    notes: "",
    hearAboutUs: "",
  });

  const setUserInfo = (userInfo, value) => {
    setForm({ ...form, [value]: userInfo });
  };

  const addCustomer = async () => {
    try {
      const {
        accountManager,
        firstName,
        lastName,
        emailAddress,
        homeNumber,
        mobileNumber,
        addCustomerFirstName,
        addCustomerLastName,
        addCustomerEmailAddress,
        addCustomerMobileNumber,
        addCustomerHomeNumber,
        companyName,
        companyEmailAddress,
        companyMobileNumber,
        companyOfficeNumber,
        homeAddress,
        appartment,
        zip,
        province,
        city,
        hearAboutUs,
        notes,
      } = form;
      const userObj = {
        userDetails: {
          accountManager,
          firstName,
          lastName,
          emailAddress,
          homeNumber,
          mobileNumber,
        },
        aditionalCustomerDetails: {
          addCustomerFirstName,
          addCustomerLastName,
          addCustomerEmailAddress,
          addCustomerMobileNumber,
          addCustomerHomeNumber,
        },
        companyDetails: {
          companyName,
          companyEmailAddress,
          companyMobileNumber,
          companyOfficeNumber,
        },
        userAddress: {
          homeAddress,
          appartment,
          zip,
          province,
          city,
        },
        customerFeedback: {
          notes,
          hearAboutUs,
        },
      };
      console.log("before ", userObj);
      await firestore.collection("customer").add(userObj);
      alert("Submitted Successfully");
    } catch (error) {
      console.log(error);
    }
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
        <PrimaryCustomer setUserInfo={setUserInfo} />
        <AdditionalCustomer setUserInfo={setUserInfo} />
        <AddCompany setUserInfo={setUserInfo} />
        <BillingAddress setUserInfo={setUserInfo} />
        <div onClick={addCustomer}>
          <AntButton background="#00818F" color="#ffff" text="Submit" />
        </div>
      </Content>
    </div>
  );
};

export default Customer;
