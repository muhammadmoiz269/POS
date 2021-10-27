import React from "react";
import { Row, Col, Dropdown, Avatar } from "antd";
import Searchbar from "../Searchbar/Searchbar";
import "./Navbar.css";
import Navbarinfo from "../Navbarinfo/Navbarinfo";
import HomeImg from "../../assests/images/homeimage.png";
import Antimage from "../../Component/Antimage/Antimage";
import AntSelect from "../AntSelect/AntSelect";
import ProfileCard from "../ProfileCard/ProfileCard";

const Navbar = () => {
  return (
    <Row style={{ width: "100%" }}>
      <Col className="flex2" span={20}>
        <AntSelect />

        <Navbarinfo />
      </Col>
      <Col
        span={4}
        style={{
          background: "#ffff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Antimage img={HomeImg} />
      </Col>
    </Row>
  );
};

export default Navbar;
