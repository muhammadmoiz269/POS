import React from "react";
import { Layout } from "antd";
import ProfileHeadSection from "../../Component/ProfileHeadSection/ProfileHeadSection";
import AntType from "../../Component/AntTypo/AntType";
import "./Customer.css";
import PrimaryCustomer from "../../Component/PrimaryCustomer/PrimaryCustomer";
import AdditionalCustomer from "../../Component/AdditionalCustomer/AdditionalCustomer";
import AddCompany from "../../Component/AddCompany/AddCompany";
import BillingAddress from "../../Component/BillingAddress/BillingAddress";
import AntButton from "../../Component/AntButton/AntButton";

const { Content } = Layout;
const Customer = () => {
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
        <PrimaryCustomer />
        <AdditionalCustomer />
        <AddCompany />
        <BillingAddress />
        <div className="BtnWidth">
          <AntButton background="#00818F" color="#ffff" text="Submit" />
        </div>
      </Content>
    </div>
  );
};

export default Customer;
