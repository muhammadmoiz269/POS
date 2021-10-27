import React, { useState } from "react";
import { Calendar, Alert } from "antd";
import "./AntCalendar.css";
import moment from "moment";

const AntCalendar = ({ getDate }) => {
  // console.log("moment is", moment);
  const [value, setvalue] = useState(moment());

  const onSelect = (value) => {
    setvalue(value);

    const Currentdate = value.format("DD");
    const CurrentMonth = value.format("MMM");

    getDate(Currentdate, CurrentMonth);
  };

  const onPanelChange = (value) => {
    setvalue(value);
  };

  return (
    <div>
      <Calendar
        defaultValue={moment}
        fullscreen={false}
        onPanelChange={onPanelChange}
        value={value}
        onSelect={onSelect}
      />
    </div>
  );
};

export default AntCalendar;
