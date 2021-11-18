import React from "react";
import { Select } from "antd";
import "./AntSelect.css";
import { SearchOutlined } from "@ant-design/icons";
import { Input, Form } from "antd";

const { Option } = Select;

function onBlur() {
  // console.log("blur");
}

function onFocus() {
  // console.log("focus");
}

function onSearch(val) {
  // console.log("search:", val);
}

const AntSelect = ({ placeholder, valueName, onNav, next }) => {
  function onChange(value) {}
  const setNextPage = () => {
    next();
  };
  return (
    <div>
      <Form.Item name={valueName}>
        <Select
          className={onNav ? "navSearchbr" : "Searchbr"}
          showSearch={true}
          placeholder={placeholder}
          optionFilterProp="children"
          onChange={next ? setNextPage : onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onSearch={onSearch}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="tom">Tom</Option>
        </Select>
      </Form.Item>
    </div>
  );
};

export default AntSelect;
