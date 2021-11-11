import React, { useState } from "react";
import { Form, Layout, Button } from "antd";
import AntType from "../../Component/AntTypo/AntType";
import "./Customer.css";
import PrimaryCustomer from "../../Component/PrimaryCustomer/PrimaryCustomer";
import AdditionalCustomer from "../../Component/AdditionalCustomer/AdditionalCustomer";
import AddCompany from "../../Component/AddCompany/AddCompany";
import BillingAddress from "../../Component/BillingAddress/BillingAddress";
import { firestore } from "../../Firebase/Firebase";
import { notification } from "antd";

const { Content } = Layout;

const Customer = () => {
  const [form1] = Form.useForm();

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

  const onFinish = async (values) => {
    console.log("Success:", values);
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
    openNotification(
      "bottomLeft",
      "Form submitted successfully.",
      "Form Submitted"
    );
    form1.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    openNotification(
      "bottomLeft",
      "Please fill out the field correctly.",
      "Field Error"
    );
  };

  const openNotification = (placement, text, status) => {
    if (status === "Field Error") {
      notification.error({
        message: `Notification ${status}`,
        description: text,
        placement,
        duration: 2,
      });
    } else {
      notification.success({
        message: `Notification ${status}`,
        description: text,
        placement,
        duration: 2,
      });
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
        <Form form={form1} onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <PrimaryCustomer setUserInfo={setUserInfo} />
          <AdditionalCustomer setUserInfo={setUserInfo} />
          <AddCompany setUserInfo={setUserInfo} />
          <BillingAddress setUserInfo={setUserInfo} />
          <Button htmlType="submit" size="large">
            Submit
          </Button>
        </Form>
      </Content>
    </div>
  );
};

export default Customer;
