import { Avatar } from "antd";
import React from "react";
import AntType from "../AntTypo/AntType";
import Antavatar from "../../Component/Antavatar/Antavatar";
import { useMediaQuery } from "react-responsive";
import "./Navbarinfo.css";

import ProfileCard from "../ProfileCard/ProfileCard";

const Navbarinfo = ({ color, icon }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <div className="navBarInformation">
      <div>
        <Antavatar img="https://avatars.githubusercontent.com/u/1674036?s=40&v=4" />
      </div>
      <div className="navBarContent">
        <AntType
          text={isTabletOrMobile ? "Welcome Aftab" : " "}
          fontSize={5}
          fontWeight={true}
          color={color ? color : "#00818F"}
        />
      </div>
      <div>{icon ? icon : <ProfileCard />}</div>
    </div>
  );
};

export default Navbarinfo;
