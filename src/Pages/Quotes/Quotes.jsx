import { Content } from "antd/lib/layout/layout";
import React, { useState, useEffect } from "react";
import AntType from "../../Component/AntTypo/AntType";
import BuildQuote from "../../Component/BuildQuote/BuildQuote";
import QuoteManufacturer from "../../Component/QuoteManufacturer/QuoteManufacturer";
import "./Quotes.css";
import { Steps, Row, Col, Form } from "antd";
import ManufacturerDetails from "../../Component/ManufacturerDetails/ManufacturerDetails";
import ManufacturerMeasurement from "../../Component/ManufacturerMeasurement/ManufacturerMeasurement";
import Antimage from "../../Component/Antimage/Antimage";
import { notification } from "antd";
import { firestore } from "../../Firebase/Firebase";
const { Step } = Steps;

const Quotes = () => {
  const [current, setCurrent] = React.useState(0);
  const [logo, setLogo] = React.useState();

  const [data, setdata] = React.useState({});

  const [quotesForm] = Form.useForm();

  const onFinish = async (valuess) => {
    const quoteObj = {
      manufactureDetails: data.manufactureDetails,
      manufactureMeasurement: valuess,
    };

    await firestore.collection("quotes").add(quoteObj);

    openNotification(
      "bottomLeft",
      "Form submitted successfully.",
      "Form Submitted"
    );
    quotesForm.resetFields();
  };

  const getFieldValues = () => {
    setdata({ manufactureDetails: quotesForm.getFieldsValue() });
    console.log("*******", data);
  };
  const resetField = () => {
    setdata(null);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    openNotification(
      "bottomLeft",
      "Please fill out the field correctly.",
      "Field Error"
    );
  };

  useEffect(() => {
    console.log("here is", data);
  }, [data]);

  const openNotification = (placement, text, status) => {
    if (status === "Field Error") {
      notification.error({
        message: `Notification ${status}`,
        description: text,
        placement,
        duration: 2,
      });
    } else {
      notification.success({
        message: `Notification ${status}`,
        description: text,
        placement,
        duration: 2,
      });
    }
  };

  const setImageLogo = (image) => {
    setLogo(image);
  };

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: "First",
      content: <BuildQuote next={next} />,
    },
    {
      title: "Second",
      content: (
        <QuoteManufacturer
          next={next}
          prev={prev}
          setImageLogo={setImageLogo}
        />
      ),
    },
    {
      title: "third",
      content: (
        <ManufacturerDetails
          next={next}
          prev={prev}
          form={quotesForm}
          getFieldValues={getFieldValues}
          resetField={resetField}
        />
      ),
    },
    {
      title: "fourth",
      content: <ManufacturerMeasurement prev={prev} />,
    },
  ];

  return (
    <div>
      <Content className="quoteContent">
        <div className="quoteHeadSection">
          <Row>
            <Col xs={12} xl={12} className="quoteHeadGrid">
              <AntType
                text="Build a Quote"
                fontSize={1}
                fontWeight={true}
                color="#1D1C1C"
              />

              <AntType
                text={current > 0 && "Quote #: xxxxxxxxx"}
                fontSize={5}
                fontWeight={true}
                color="gray"
              />
            </Col>
            <Col className="logoSection" xs={12} xl={12}>
              {logo && current === 2 ? (
                <div className="imageAnimate">
                  <Antimage img={logo} height="70px" width="90px" />
                </div>
              ) : (
                <></>
              )}
            </Col>
          </Row>
        </div>
        <>
          <Form
            form={quotesForm}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <div className="steps-content">{steps[current].content}</div>
          </Form>
        </>
      </Content>
    </div>
  );
};

export default Quotes;
