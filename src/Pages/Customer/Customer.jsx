import React, { useState } from "react";
import { Layout } from "antd";
import ProfileHeadSection from "../../Component/ProfileHeadSection/ProfileHeadSection";
import AntType from "../../Component/AntTypo/AntType";
import "./Customer.css";
import PrimaryCustomer from "../../Component/PrimaryCustomer/PrimaryCustomer";
import AdditionalCustomer from "../../Component/AdditionalCustomer/AdditionalCustomer";
import AddCompany from "../../Component/AddCompany/AddCompany";
import BillingAddress from "../../Component/BillingAddress/BillingAddress";
import AntButton from "../../Component/AntButton/AntButton";
import { firestore } from "../../Firebase/Firebase";
import { Alert } from "antd";
import firebase from "./../../Firebase/Firebase";

const { Content } = Layout;

const Customer = () => {
  const [data, setData] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [homeNumber, setHomeNumber] = useState("");

  const [addCustomerFirstName, setAddCusomerFirstName] = useState("");
  const [addCustomerLastName, setaddCustomerLastName] = useState("");
  const [addCustomerEmailAddress, setAddCustomerEmailAddress] = useState("");
  const [addCustomerMobileNumber, setAddCustomerMobileNumber] = useState("");
  const [addCustomerHomeNumber, setAddCustomerHomeNumber] = useState("");

  const [companyName, setCompanyName] = useState("");
  const [companyEmailAddress, setCompanyEmailAddress] = useState("");
  const [companyMobileNumber, setCompanyMobileNumber] = useState("");
  const [companyOfficeNumber, setCompanyOfficeNumber] = useState("");

  const [homeAddress, setHomeAddress] = useState("");
  const [appartment, setAppartment] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");

  const [notes, setNotes] = useState("");

  const ValidateEmail = (email) => {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(mailformat)) {
      return true;
    } else {
      // alert("You have entered an invalid email address!");

      return false;
    }
  };
  function allLetter(input, isMandatory) {
    var letters = /^[A-Za-z]+$/;
    if (isMandatory === "Mandatory") {
      if (input.match(letters)) {
        return true;
      } else {
        return false;
      }
    } else {
      if (input.length === 0) {
        return true;
      } else if (input.match(letters)) {
        return true;
      } else {
        return false;
      }
    }
  }
  function allnumeric(input, isMandatory) {
    var numbers = /^[0-9]+$/;
    if (isMandatory === "Mandatory") {
      if (input.match(numbers)) {
        return true;
      } else {
        return false;
      }
    } else {
      if (input.length === 0) {
        return true;
      } else if (input.match(numbers)) {
        return true;
      } else {
        return false;
      }
    }
  }

  const setUserInfo = (userInfo, value) => {
    switch (value) {
      case "firstName":
        return setFirstName(userInfo);

      case "lastName":
        return setLastName(userInfo);
      case "emailAddress":
        return setEmailAddress(userInfo);

      case "mobileNumber":
        return setMobileNumber(userInfo);
      case "homeNumber":
        return setHomeNumber(userInfo);
      case "homeAddress":
        return setHomeAddress(userInfo);

      case "addCustomerFirstName":
        return setAddCusomerFirstName(userInfo);
      case "addCustomerLastName":
        return setaddCustomerLastName(userInfo);
      case "addCustomerEmailAddress":
        return setAddCustomerEmailAddress(userInfo);

      case "addCustomerMobileNumber":
        return setAddCustomerMobileNumber(userInfo);
      case "addCustomerHomeNumber":
        return setAddCustomerHomeNumber(userInfo);

      case "companyName":
        return setCompanyName(userInfo);
      case "companyEmailAddress":
        return setCompanyEmailAddress(userInfo);
      case "companyMobileNumber":
        return setCompanyMobileNumber(userInfo);
      case "companyOfficeNumber":
        return setCompanyOfficeNumber(userInfo);

      case "appartment":
        return setAppartment(userInfo);
      case "zip":
        return setZip(userInfo);
      case "city":
        return setCity(userInfo);
      case "province":
        return setProvince(userInfo);
      case "notes":
        return setNotes(userInfo);

      default:
        return "";
    }
  };

  const addCustomer = async () => {
    try {
      const checkInputs = [
        allLetter(firstName, "Mandatory"),
        allLetter(lastName, "Mandatory"),
        allLetter(homeAddress, "notMandatory"),
        allLetter(appartment, "notMandatory"),
        allLetter(province, "notMandatory"),
        allLetter(city, "notMandatory"),

        ValidateEmail(emailAddress),
        allnumeric(zip, "notMandatory"),
        allnumeric(mobileNumber, "Mandatory"),
        allnumeric(homeNumber, "notMandatory"),
      ];
      const isValidInputs = checkInputs.every((item) => item === true);

      console.log("Is Valid", isValidInputs);

      if (isValidInputs) {
        const userObj = {
          userDetails: {
            firstName,
            lastName,
            emailAddress,
            homeNumber,
            mobileNumber,
          },
          aditionalCustomerDetails: {
            addCustomerFirstName,
            addCustomerLastName,
            addCustomerEmailAddress,
            addCustomerMobileNumber,
            addCustomerHomeNumber,
          },
          companyDetails: {
            companyName,
            companyEmailAddress,
            companyMobileNumber,
            companyOfficeNumber,
          },
          userAddress: {
            homeAddress,
            appartment,
            zip,
            province,
            city,
          },
          customerFeedback: {
            notes,
          },
        };
        // console.log("before ", userObj);
        await firestore.collection("customer").add(userObj);
        alert("Submitted Successfully");

        // console.log("after");
      } else {
        alert("Wrong Input");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Content className="customerContent">
        <div className="customerHeadSection">
          <AntType
            text="Add a Customer"
            fontSize={1}
            fontWeight={true}
            color="#1D1C1C"
          />
        </div>
        <PrimaryCustomer setUserInfo={setUserInfo} />
        <AdditionalCustomer setUserInfo={setUserInfo} />
        <AddCompany setUserInfo={setUserInfo} />
        <BillingAddress setUserInfo={setUserInfo} />
        <div className="BtnWidth" onClick={addCustomer}>
          <AntButton background="#00818F" color="#ffff" text="Submit" />
        </div>
      </Content>
    </div>
  );
};

export default Customer;
