import React from "react";
import { Select } from "antd";
import "./AntSelect.css";
import { SearchOutlined } from "@ant-design/icons";

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

const AntSelect = ({
  placeholder,
  setUserInfo,
  valueName,
  setProductInfo,
  onNav,
}) => {
  function onChange(value) {
    if (setUserInfo) {
      setUserInfo(value, valueName);
    }
    if (setProductInfo) {
      setProductInfo(value, valueName);
    }
  }
  return (
    <div>
      <Select
        className={onNav ? "navSearchbr" : "Searchbr"}
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
