import React, { useState } from "react";
import { Collapse } from "antd";

import UserInfoFields from "../UserInfoFields/UserInfoFields";
import "./AddCompany.css";
import AntType from "../AntTypo/AntType";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const AddCompany = ({ setUserInfo }) => {
  const [iconVisible, seticonVisible] = useState(["1"]);
  function callback(key) {
    seticonVisible(key);
  }
  return (
    <div>
      <Collapse defaultActiveKey={["0"]} onChange={callback}>
        <Panel
          showArrow={false}
          header={
            <AntType
              text={
                iconVisible.length === 1
                  ? "Add company name"
                  : "Remove company name"
              }
              fontSize={5}
              fontWeight={true}
              color="#00818F"
              icon={
                iconVisible.length === 1 ? (
                  <PlusOutlined style={{ color: "#C95B1D" }} />
                ) : (
                  <MinusOutlined style={{ color: "#C95B1D" }} />
                )
              }
              margin="0rem 0.5em"
            />
          }
          key="1"
        >
          <UserInfoFields isCompany="true" setUserInfo={setUserInfo} />
        </Panel>
      </Collapse>
    </div>
  );
};

export default AddCompany;
