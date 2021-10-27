import React, { useState } from "react";
import { Input, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import DropDown from "../Dropdown/Dropdown";
import "./Searchbar.css";
const { Search } = Input;

const onSearch = (value) => console.log(value);

const suffix = (
  <SearchOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
      background: "#F1F1F1",
    }}
  />
);

const Searchbar = () => {
  const [dropdownvisible, setdropdownvisible] = useState(false);
  const SetDropDown = () => {
    setdropdownvisible(!dropdownvisible);
  };

  return (
    <div className="Search">
      <Input
        placeholder="Search"
        onSearch={onSearch}
        style={{ width: "300px", background: "#F1F1F1", borderRadius: "10px" }}
        onClick={SetDropDown}
        bordered={false}
        suffix={suffix}
      />

      <DropDown dropdown={dropdownvisible} />
    </div>
  );
};

export default Searchbar;
