import React, { useEffect, useState } from "react";
import { Table } from "antd";
import "./AntTable.css";
const columns = [
  {
    title: "Name",
    dataIndex: "name",

    sorter: {
      compare: (a, b) => a.name - b.name,
      multiple: 3,
    },
  },
  {
    title: "Email",
    dataIndex: "email",
    sorter: {
      compare: (a, b) => a.email - b.email,
      multiple: 3,
    },
  },
  {
    title: "Phone Number",
    dataIndex: "number",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "City",
    dataIndex: "city",
  },
];

function onChange(pagination, filters, sorter, extra) {
  console.log("params", pagination, filters, sorter, extra);
}
const AntTable = ({ customerLists }) => {
  const [userObj, setUserObj] = useState([]);
  const setData = (customerData) => {
    // console.log("***********", customerData);

    customerData.map((obj) => {
      return setUserObj([
        ...userObj,
        {
          name: obj.userDetails.firstName,
          email: obj.userDetails.emailAddress,
          number: obj.userDetails.mobileNumber,
          address: obj.userAddress.homeAddress,
          city: obj.userAddress.city,
        },
      ]);
    });
    // console.log("name is ", userObj);
  };

  useEffect(() => {
    setData(customerLists);
  }, [customerLists]);

  return (
    <div>
      <Table
        className="AntTable"
        columns={columns}
        dataSource={userObj}
        onChange={onChange}
      />
    </div>
  );
};

export default AntTable;
