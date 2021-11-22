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
  const [customerForm] = Form.useForm();

  const onFinish = async (values) => {
    // console.log("Success:", values);
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
    } = values;
    const userObj = {
      userDetails: {
        accountManager: accountManager || "",
        firstName: firstName || "",
        lastName: lastName || "",
        emailAddress: emailAddress || "",
        homeNumber: homeNumber || "",
        mobileNumber: mobileNumber || "",
      },
      aditionalCustomerDetails: {
        addCustomerFirstName: addCustomerFirstName || "",
        addCustomerLastName: addCustomerLastName || "",
        addCustomerEmailAddress: addCustomerEmailAddress || "",
        addCustomerMobileNumber: addCustomerMobileNumber || "",
        addCustomerHomeNumber: addCustomerHomeNumber || "",
      },
      companyDetails: {
        companyName: companyName || "",
        companyEmailAddress: companyEmailAddress || "",
        companyMobileNumber: companyMobileNumber || "",
        companyOfficeNumber: companyOfficeNumber || "",
      },
      userAddress: {
        homeAddress: homeAddress || "",
        appartment: appartment || "",
        zip: zip || "",
        province: province || "",
        city: city || "",
      },
      customerFeedback: { notes: notes || "", hearAboutUs: hearAboutUs || "" },
    };
    console.log("success ", userObj);
    await firestore.collection("customer").add(userObj);
    openNotification(
      "bottomLeft",
      "Form submitted successfully.",
      "Form Submitted"
    );
    customerForm.resetFields();
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
        <Form
          form={customerForm}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <PrimaryCustomer />
          <AdditionalCustomer />
          <AddCompany />
          <BillingAddress />
          <Button htmlType="submit" size="large">
            Submit
          </Button>
        </Form>
      </Content>
    </div>
  );
};

export default Customer;
