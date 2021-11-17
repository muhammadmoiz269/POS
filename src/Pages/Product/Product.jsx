import React, { useState } from "react";
import { Layout, Button, Form } from "antd";
import AntType from "../../Component/AntTypo/AntType";
import "./Product.css";
import { Row, Col } from "antd";
import { storage, firestore } from "./../../Firebase/Firebase";
import firebase from "../../Firebase/Firebase";
import ProductSampleForm from "../../Component/ProductSampleForm/ProductSampleForm";
import ProductManufacturerSection from "../../Component/ProductManufacturerSection/ProductManufacturerSection";
import { notification } from "antd";
import { v4 as uuid } from "uuid";

const { Content } = Layout;

const Product = () => {
  const [form1] = Form.useForm();

  const [form, setForm] = useState({
    manufacturer: "",
    productImage: "",
    species: "",
    additionalSpecies: "",
    color: "",
    additionalColor: "",
    sku: "",
    retailPrice: "",
  });

  const setProductInfo = (userInfo, value) => {
    setForm({ ...form, [value]: userInfo });
  };
  const onFinish = async (values) => {
    const {
      manufacturer,
      productImage,
      species,
      additionalSpecies,
      color,
      additionalColor,
      sku,
      retailPrice,
    } = form;

    var imageRef = storage.child(`products/${uuid()}`);
    var fileListener = imageRef.put(productImage, {
      contentType: `${productImage.type}`,
      firebaseStorageDownloadTokens: uuid(),
    });
    console.log("product image is", productImage);

    //file listener takes 4 argumnets
    //fileListener.on(event type, cb file state, cb error, cd will trigger after file upload)
    fileListener.on(
      "state_changed",
      async (snapshot) => {
        console.log("********", snapshot);
        var progress =
          (await (snapshot.bytesTransferred / snapshot.totalBytes)) * 100;
        console.log("Upload is " + progress + " % done");
      },
      (error) => {
        console.log(error);
      },
      async () => {
        //will trigger after completion
        var downloadURL = await imageRef.getDownloadURL();

        //modify productObj with coverPhoto URL and created At
        const userObj = {
          productDetails: {
            manufacturer,
            productImage: downloadURL,
            species,
            additionalSpecies,
            color,
            additionalColor,
            sku,
            retailPrice,
          },
        };

        //create doc at firestore
        await firestore.collection("products").add(userObj);

        console.log(userObj);
        openNotification(
          "bottomLeft",
          "Form submitted successfully.",
          "Form Submitted"
        );
        form1.resetFields();
      }
    );
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    openNotification(
      "bottomLeft",
      "Please fill out the field correctly.",
      "Field Error"
    );
  };
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

  return (
    <Content className="customerContent">
      <div>
        <AntType
          text="Add a product sample"
          fontSize={1}
          fontWeight={true}
          color="#1D1C1C"
        />
      </div>

      <Form form={form1} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Row>
          <Col className="productLeftSection" xs={24} md={24} lg={10}>
            <ProductManufacturerSection setProductInfo={setProductInfo} />
          </Col>
          <Col className="productRightSection" xs={24} md={24} lg={14}>
            <ProductSampleForm setProductInfo={setProductInfo} />
            <Button
              size="large"
              type="primary"
              htmlType="submit"
              style={{
                background: "#00818F",
                color: "#ffff",
                border: "1px solid #00818F",
              }}
            >
              Add Sample
            </Button>
          </Col>
        </Row>
      </Form>
    </Content>
  );
};

export default Product;
