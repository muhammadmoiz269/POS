import React, { useState, useEffect } from "react";
import "./AntInput.css";
import { Input, Form } from "antd";

const AntInput = ({
  placeholder,
  isRequired,
  value,
  regex,
  setUserInfo,
  setProductInfo,
}) => {
  return (
    <div>
      <Form>
        <Form.Item
          label={isRequired && value}
          name={value}
          rules={[
            {
              required: isRequired,
              message: `Please input your ${value.toLowerCase()}!`,
            },
            {
              pattern: regex,
              message: `Please enter a valid ${value.toLowerCase()}`,
            },
          ]}
        >
          <Input
            name={value}
            placeholder={placeholder}
            size="middle"
            onChange={(e) =>
              setUserInfo ? (
                setUserInfo(e.target.value, value)
              ) : setProductInfo ? (
                setProductInfo(e.target.value, value)
              ) : (
                <></>
              )
            }
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default AntInput;
