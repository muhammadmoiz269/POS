import React from "react";
import { Collapse } from "antd";
import AntType from "../AntTypo/AntType";
import { PlusOutlined } from "@ant-design/icons";
import { Radio } from "antd";
import "./AntAccordian.css";

const { Panel } = Collapse;

function callback(key) {
  // console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
 
`;

const AntAccordian = ({ items }) => {
  // console.log("items are ", items.radioItem);
  const [value, setValue] = React.useState(1);

  const onChange = (e) => {
    // console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <Collapse defaultActiveKey={["0"]} onChange={callback}>
      <Panel
        showArrow={false}
        header={
          <AntType
            text={items.title}
            fontSize={5}
            fontWeight={true}
            color="black"
            justifyContent="space-between"
            icon={<PlusOutlined style={{ color: "#C95B1D" }} />}
            margin="0rem 0.5em"
          />
        }
        key="1"
      >
        {items.radioItem.map((items) => {
          return (
            <div>
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={parseInt(items.value)}>{items.radio}</Radio>
              </Radio.Group>
            </div>
          );
        })}
      </Panel>
    </Collapse>
  );
};

export default AntAccordian;
