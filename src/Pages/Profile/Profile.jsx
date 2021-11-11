import React from "react";
import "./Profile.css";
import { Layout } from "antd";
import ProfileHeadSection from "../../Component/ProfileHeadSection/ProfileHeadSection";
const { Content } = Layout;

const Profile = () => {
  return (
    <div>
      <Content className="profileContent">
        <ProfileHeadSection />
      </Content>
    </div>
  );
};

export default Profile;
