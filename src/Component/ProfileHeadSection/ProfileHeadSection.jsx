import React, { useState } from "react";
import AntType from "../AntTypo/AntType";
import "./ProfileHeadSection.css";
import { DownOutlined, UpOutlined, LogoutOutlined } from "@ant-design/icons";
import ProfileCard from "../ProfileCard/ProfileCard";
import SettingsPopover from "../SettingsPopover/SettingsPopover";

const ProfileHeadSection = () => {
  const [visible, setvisible] = useState(false);

  const isTrigger = () => {
    setvisible(true);
  };

  return (
    <div style={{ borderBottom: "1px solid #DCDCDC", padding: "1rem 0rem" }}>
      <AntType
        text="Flooring & Home"
        fontSize={1}
        fontWeight={true}
        color="#1D1C1C"
      />
      <div className="profileTabs">
        <AntType
          text={"Overview"}
          fontSize={5}
          fontWeight={true}
          color="#00818F"
          margin="0rem 1rem"
        />

        <SettingsPopover>
          <AntType
            text={"Settings"}
            fontSize={5}
            fontWeight={true}
            color="#00818F"
            margin="0rem 1rem"
          />
        </SettingsPopover>

        <SettingsPopover>
          <AntType
            text={"Billings"}
            fontSize={5}
            fontWeight={true}
            color="#00818F"
            margin="0rem 1rem"
          />
        </SettingsPopover>

        <AntType
          text={"Integrations"}
          fontSize={5}
          fontWeight={true}
          color="#00818F"
          margin="0rem 1rem"
        />
      </div>
    </div>
  );
};

export default ProfileHeadSection;
