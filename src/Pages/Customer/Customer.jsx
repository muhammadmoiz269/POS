import React from "react";
import { Layout } from "antd";
import ProfileHeadSection from "../../Component/ProfileHeadSection/ProfileHeadSection";
import ProfileUploadSection from "../../Component/ProfileUploadSection/ProfileUploadSection";
const { Content } = Layout;
const Customer = () => {
  return (
    <div>
      <Content className="customerContent">
        <ProfileHeadSection />
        <ProfileUploadSection />
      </Content>
    </div>
  );
};

export default Customer;
