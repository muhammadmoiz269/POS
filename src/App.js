import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.less";
import "./index.css";
import { Layout } from "antd";
import Menubar from "../src/Component/Menubar/Menubar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Profile from "./Pages/Profile/Profile";
import { MenuOutlined } from "@ant-design/icons";
import Navbar from "../src/Component/Navbar/Navbar";
// import "../src/Pages/Dashboard/Dashboard.css";
import { Row, Col } from "antd";
import Paragraph from "../src/Component/Paragraph/Paragraph";
const { Header, Content } = Layout;

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <div>
            <Layout>
              <Menubar style={{ width: "205px" }} />

              <Layout style={{ marginLeft: "205px" }}>
                <Header className="head">
                  <MenuOutlined />
                  <Navbar />
                </Header>

                <Route path="/" component={Dashboard} exact />
                <Route path="/profile" component={Profile} exact />
              </Layout>
            </Layout>
            <div>
              <Row style={{ height: "50px" }}>
                <Col className="footerSection" xs={6} md={12} lg={16}>
                  <Paragraph
                    text="Build CRM @2021"
                    fontSize="1rem"
                    color="#ffff"
                  />
                </Col>
                <Col className="footerInnerSection" xs={18} md={12} lg={8}>
                  <Paragraph
                    text="Privacy Policy"
                    fontSize="1rem"
                    color="#ffff"
                  />
                  <Paragraph text="Support" fontSize="1rem" color="#ffff" />
                  <Paragraph text="Feedback" fontSize="1rem" color="#ffff" />
                </Col>
              </Row>
            </div>
          </div>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
