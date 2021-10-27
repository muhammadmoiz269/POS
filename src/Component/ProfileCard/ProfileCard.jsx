import React, { useState } from "react";
import { Popover, Button } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import "./ProfileCard.css";
import Navbarinfo from "../Navbarinfo/Navbarinfo";
import AntType from "../AntTypo/AntType";
import Paragraph from "../Paragraph/Paragraph";
import { Divider } from "antd";
import AntButton from "../AntButton/AntButton";

const icon = <UpOutlined style={{ color: "#ffff" }} />;

const names = [
  {
    text: "Toronto",
  },
  {
    text: "Alberta",
  },
  {
    text: "Profile",
  },
  {
    text: "Account",
  },
];

const ProfileCard = () => {
  const [visible, setvisible] = useState(false);

  const hide = () => {
    setvisible(false);
  };

  const handleVisibleChange = (visible) => {
    setvisible(visible);
  };
  return (
    <div>
      <Popover
        overlayStyle={{ borderRadius: "10px" }}
        content={
          <div className="ProfileBox">
            <div
              className="UpperSection"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Navbarinfo color="#ffff" icon={icon} />
              </div>
              <div style={{ flexFlow: "column" }}>
                <AntButton
                  background="#ffff"
                  color="#00818F"
                  text="Owner"
                  padding="0.2rem 0.5rem"
                />
              </div>
            </div>
            <div className="LowerSection">
              {names.map((item) => {
                return (
                  <Paragraph
                    text={item.text}
                    fontSize="1rem"
                    color="gray"
                    borderBottom="1px solid #DCDCDC"
                    padding="0.3rem 0.5rem"
                  />
                );
              })}

              <Paragraph
                text="Log Out"
                fontSize="1rem"
                color="gray"
                padding="0.3rem 0.5rem"
              />
            </div>
          </div>
        }
        trigger="click"
        visible={visible}
        onVisibleChange={handleVisibleChange}
      >
        <DownOutlined />
      </Popover>
    </div>
  );
};

export default ProfileCard;
