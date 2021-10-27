import React from "react";
import AntType from "../AntTypo/AntType";
import { MenuFoldOutlined } from "@ant-design/icons";
import Paragraph from "../Paragraph/Paragraph";
import ProfileCard from "../ProfileCard/ProfileCard";

const Morningsection = () => {
  return (
    <div style={{ paddingLeft: "1rem", position: "relative" }}>
      <AntType
        text="Good Morning Aftab"
        fontSize={1}
        fontWeight={true}
        color="#1D1C1C"
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Paragraph
          text="Hey Whats happening at floor and toronto."
          fontSize="1rem"
          color="gray"
        />

        <div style={{ display: "flex" }}>
          <AntType
            text="Filter and sort."
            fontSize={5}
            fontWeight={true}
            color="#00818F"
          />
          <MenuFoldOutlined
            style={{
              color: "#00818F",
              fontSize: "1.3rem",
              paddingLeft: "1rem",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Morningsection;
