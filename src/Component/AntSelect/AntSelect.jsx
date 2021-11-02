import React from "react";
import { Select } from "antd";
import "./AntSelect.css";
import { SearchOutlined } from "@ant-design/icons";

const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log("blur");
}

function onFocus() {
  console.log("focus");
}

function onSearch(val) {
  console.log("search:", val);
}

const AntSelect = ({ placeholder, isCustomerPage }) => {
  return (
    <div>
      <Select
        className="Searchbr"
        showSearch={true}
        placeholder={placeholder}
        optionFilterProp="children"
        onChange={onChange}
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
    </div>
  );
};

export default AntSelect;
