import React from "react";
import { Menu } from "antd";
import { Typography } from "antd";

// import Comments from "../Comment/comment";
import "./Menubar.css";

import {
  AppstoreOutlined,
  FlagOutlined,
  UserOutlined,
  CalendarOutlined,
  OrderedListOutlined,
  StarOutlined,
  LeftOutlined,
  RightOutlined,
  CopyOutlined,
  FolderOpenOutlined,
  SnippetsOutlined,
  TagOutlined,
  BulbOutlined,
} from "@ant-design/icons";
const { SubMenu } = Menu;

const { Title } = Typography;

const Menubar = ({ showDrawer, onClose, visible }) => {
  const handleClick = (e) => {
    console.log("click ", e);
  };
  return (
    <div className="menubr">
      <Menu
        onClick={handleClick}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        width="245"
      >
        {visible ? (
          <LeftOutlined className="LeftIcon" onClick={onClose} />
        ) : (
          <></>
        )}
        <div className="MenuBarUpperSection">
          <div className="flex1">
            <FlagOutlined className="flagIcon" />
            <Title level={5}>BUILDCRM</Title>
          </div>
        </div>

        <Menu.Item key="1" icon={<AppstoreOutlined className="icon" />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="2" icon={<CalendarOutlined className="icon" />}>
          Calendar
        </Menu.Item>
        <Menu.Item key="3" icon={<OrderedListOutlined className="icon" />}>
          Tasks
        </Menu.Item>
        <SubMenu
          key="sub2"
          icon={<UserOutlined className="icon" />}
          title="Customers"
        >
          <Menu.Item key="4">Add Customer</Menu.Item>
          <Menu.Item key="5">View List</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub3"
          icon={<CopyOutlined className="icon" />}
          title="Quotes"
        >
          <Menu.Item key="6">Build a Quote</Menu.Item>
          <Menu.Item key="7">View all Quote</Menu.Item>
        </SubMenu>
        <Menu.Item key="8" icon={<FolderOpenOutlined className="icon" />}>
          Orders
        </Menu.Item>
        <Menu.Item key="9" icon={<SnippetsOutlined className="icon" />}>
          Invoices
        </Menu.Item>
        <Menu.Item key="10" icon={<TagOutlined className="icon" />}>
          Samples
        </Menu.Item>

        <Menu.Item
          key="11"
          icon={<TagOutlined className="icon" />}
          style={{ marginTop: "1.5rem" }}
          className="bottonMenu"
        >
          Products
        </Menu.Item>

        <SubMenu
          key="sub4"
          icon={<UserOutlined className="icon" />}
          title="Contacts"
          className="bottonMenu"
        >
          <Menu.Item key="12">Add Contacts</Menu.Item>
          <Menu.Item key="13">View Contacts</Menu.Item>
        </SubMenu>

        <Menu.Item
          key="14"
          icon={<BulbOutlined className="icon" />}
          className="bottonMenu"
        >
          Learn Center
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Menubar;
