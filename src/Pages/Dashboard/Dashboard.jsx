import React, { useState } from "react";

import { Layout } from "antd";
import { Drawer, Button } from "antd";
import Menubar from "../../Component/Menubar/Menubar";
import "./Dashboard.css";
import { MenuOutlined } from "@ant-design/icons";
import Navbar from "../../Component/Navbar/Navbar";
import Morningsection from "../../Component/Morningsection/Morningsection";
import AddContentSection from "../../Component/AddContentSection/AddContentSection";
import TaskSection from "../../Component/TaskSection/TaskSection";
import MeetingSection from "../../Component/MeetingSection/MeetingSection";
import { Row, Col, Divider } from "antd";

import Paragraph from "../../Component/Paragraph/Paragraph";

const { Header, Footer, Sider, Content } = Layout;

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
          <Content
            style={{
              padding: "1rem 0.5rem",
              background: "#ffff",
              borderBottom: "1px solid gray",
            }}
          >
            <Morningsection />
            <AddContentSection />
            <TaskSection />
            <MeetingSection />
          </Content>
        </Layout>
      </Layout>
      <div>
        <Row style={{ height: "50px" }}>
          <Col
            xs={6}
            md={12}
            lg={16}
            style={{
              display: "flex",
              justifyContent: "center",
              background: "#004D8B",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Paragraph text="Build CRM @2021" fontSize="1rem" color="#ffff" />
          </Col>
          <Col
            xs={18}
            md={12}
            lg={8}
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              background: "#0A78C7",
              height: "100%",
            }}
          >
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
