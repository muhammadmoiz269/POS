import React from "react";

import { Layout } from "antd";
import Menubar from "../Menubar/Menubar";

import { MenuOutlined } from "@ant-design/icons";
import Navbar from "../Navbar/Navbar";

import { Row, Col } from "antd";
import Paragraph from "../Paragraph/Paragraph";
const { Header, Content } = Layout;

const AntLayout = ({ children }) => {
  return (
    <div>
      <Layout>
        <Menubar style={{ width: "205px" }} />

        <Layout style={{ marginLeft: "205px" }}>
          <Header className="head">
            <MenuOutlined />
            <Navbar />
          </Header>

          {children}
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

export default AntLayout;
