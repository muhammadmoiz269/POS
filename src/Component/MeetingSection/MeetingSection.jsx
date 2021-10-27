import React, { useState } from "react";
import { Row, Col, Divider } from "antd";
import Addcard from "../Addcard/Addcard";
import { UserOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import AppointmentCard from "../AppointmentCard/AppointmentCard";
import AntType from "../AntTypo/AntType";
import AntButton from "../AntButton/AntButton";
import TaskCard from "../TaskCard/TaskCard";
import AntCalendar from "../AntCalendar/AntCalendar";
import Todo from "../../Component/Todo/Todo";
import moment from "moment";

import "./MeetingSection.css";

const product = [
  {
    productname: "Call Ana Care  installation",
    time: "9:00 Am",
    avatar: "https://avatars.githubusercontent.com/u/1674036?s=40&v=4",
    background: "#ECBB3D",
  },
  {
    productname: "Product Delievery  time",
    time: "Today",
    avatar: "https://avatars.githubusercontent.com/u/1674036?s=40&v=4",
    background: "#80C7D0",
  },
  {
    productname: "Follow up with Cambria",
    time: "Today",
    avatar: "https://avatars.githubusercontent.com/u/1674036?s=40&v=4",
    background: "#F98341",
  },
  {
    productname: "Brochure  Review",
    time: "Tomorrow",
    avatar: "https://avatars.githubusercontent.com/u/1674036?s=40&v=4",
    background: "#B1A8DE",
  },
  {
    productname: "Brian Noble Pick Up",
    time: "2:00 Pm",
    avatar: "https://avatars.githubusercontent.com/u/1674036?s=40&v=4",
    background: "#80C7D0",
  },
];
const filmMaking = [
  {
    name: "Set up installment for Anna Care",
    color: "#EC8348",
    avatar: "https://avatars.githubusercontent.com/u/1674036?s=40&v=4",

    fontsize: "1.2",
    time: "9:00 am",
  },
  {
    name: "Kamadan Delievery",

    color: "#7EBAB7",
    avatar: "https://avatars.githubusercontent.com/u/1674036?s=40&v=4",

    fontsize: "1.2",
    time: "10:00 am",
  },
  {
    name: "Set up installment for Anna Care",
    color: "#F8CA69",
    avatar: "https://avatars.githubusercontent.com/u/1674036?s=40&v=4",

    fontsize: "1.2",
    time: "10:30 am",
  },
  {
    name: "Kamadan Delievery",

    color: "#318E87",
    avatar: "https://avatars.githubusercontent.com/u/1674036?s=40&v=4",

    fontsize: "1.2",
    time: "11:00 am",
  },
  {
    name: "Kamadan Delievery",

    color: "#318E87",
    avatar: "https://avatars.githubusercontent.com/u/1674036?s=40&v=4",

    fontsize: "1.2",
    time: "11:00 am",
  },
];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const MeetingSection = () => {
  const [CurrentDate, setCurrentDate] = useState(moment().format("DD"));
  const [CurrentMonth, setCurrentMonth] = useState(moment().format("MMM"));

  const getDate = (date, Month) => {
    setCurrentDate(date);
    setCurrentMonth(Month);
    console.log("date is ", date);
    console.log("Month is ", Month);
  };

  return (
    <div className="MeetingSec">
      <Row>
        <Col
          xs={24}
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ marginLeft: "1rem" }}>
            <AntType text="Calendar" fontSize={3} color="black" align="left" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <LeftOutlined className="LeftOutlineIcon" />

            <AntType
              text={`${CurrentMonth}-${CurrentDate}`}
              fontSize={5}
              color="gray"
              align="center"
            />

            <RightOutlined className="RightOutlineIcon" />
          </div>
          <div>
            <AntButton
              background="#00818F"
              color="#ffff"
              text="Create an event"
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={24} lg={12}>
          <Row
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <AntCalendar getDate={getDate} />
          </Row>
        </Col>

        <Col
          xs={24}
          sm={24}
          md={24}
          lg={12}
          style={{
            height: "330px",
            overflowY: "scroll",
            scrollbarWidth: "10px",
          }}
        >
          {filmMaking.map((items) => {
            return <Todo item={items} />;
          })}
        </Col>
      </Row>
    </div>
  );
};

export default MeetingSection;
