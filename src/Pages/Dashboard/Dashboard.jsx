import React from "react";
import { Layout } from "antd";
import "./Dashboard.css";
import Morningsection from "../../Component/Morningsection/Morningsection";
import AddContentSection from "../../Component/AddContentSection/AddContentSection";
import TaskSection from "../../Component/TaskSection/TaskSection";
import MeetingSection from "../../Component/MeetingSection/MeetingSection";

const { Content } = Layout;

const Dashboard = () => {
  return (
    <div>
      <Content className="dashboardContent">
        <Morningsection />
        <AddContentSection />
        <TaskSection />
        <MeetingSection />
      </Content>
    </div>
  );
};

export default Dashboard;
