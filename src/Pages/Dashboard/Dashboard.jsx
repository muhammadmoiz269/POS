import React, { useState } from "react";

import { Layout } from "antd";
import Menubar from "../../Component/Menubar/Menubar";
import "./Dashboard.css";
import { MenuOutlined } from "@ant-design/icons";
import Navbar from "../../Component/Navbar/Navbar";
import Morningsection from "../../Component/Morningsection/Morningsection";
import AddContentSection from "../../Component/AddContentSection/AddContentSection";
import TaskSection from "../../Component/TaskSection/TaskSection";
import MeetingSection from "../../Component/MeetingSection/MeetingSection";
import { Row, Col } from "antd";

import Paragraph from "../../Component/Paragraph/Paragraph";

const { Header, Content } = Layout;

const Dashboard = () => {
  return (
    <div>
      <Layout>
        <Menubar style={{ width: "205px" }} />

        <Layout style={{ marginLeft: "205px" }}>
          <Header className="head">
            <MenuOutlined />
            <Navbar />
          </Header>
          <Content className="dashboardContent">
            <Morningsection />
            <AddContentSection />
            <TaskSection />
            <MeetingSection />
          </Content>
        </Layout>
      </Layout>
      <div>
        <Row style={{ height: "50px" }}>
          <Col className="footerSection" xs={6} md={12} lg={16}>
            <Paragraph text="Build CRM @2021" fontSize="1rem" color="#ffff" />
          </Col>
          <Col className="footerInnerSection" xs={18} md={12} lg={8}>
            <Paragraph text="Privacy Policy" fontSize="1rem" color="#ffff" />
            <Paragraph text="Support" fontSize="1rem" color="#ffff" />
            <Paragraph text="Feedback" fontSize="1rem" color="#ffff" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;
