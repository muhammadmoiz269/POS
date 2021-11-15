import React from "react";
import AntSelect from "../AntSelect/AntSelect";
import AntType from "../AntTypo/AntType";
import AntButton from "../AntButton/AntButton";
import "./BuildQuote.css";
const BuildQuote = () => {
  return (
    <div className="verticalPadding">
      <AntType
        text="Search Customer"
        fontSize={5}
        fontWeight={true}
        color="#1D1C1C"
      />

      <AntSelect placeholder="Make a Selection" />

      <div className="verticalPadding">
        <AntType text="or" fontSize={3} fontWeight={true} color="gray" />
        <AntButton
          background="#00818F"
          color="#ffff"
          text="Add a new customer"
        />
      </div>
    </div>
  );
};

export default BuildQuote;
