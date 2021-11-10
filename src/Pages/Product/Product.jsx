import React, { useState } from "react";
import { Layout } from "antd";
import AntType from "../../Component/AntTypo/AntType";
import "./Product.css";
import { Row, Col } from "antd";
import AntButton from "../../Component/AntButton/AntButton";
import { Alert } from "antd";
import { storage, serverTimeStamp, firestore } from "./../../Firebase/Firebase";
import ProductSampleForm from "../../Component/ProductSampleForm/ProductSampleForm";
import ProductManufacturerSection from "../../Component/ProductManufacturerSection/ProductManufacturerSection";
const { Content } = Layout;

const Product = () => {
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
  const addProduct = async () => {
    try {
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

      var imageRef = storage.child(`products/img-${productImage.uid}`);
      var fileListener = imageRef.put(productImage);

      //file listener takes 4 argumnets
      //fileListener.on(event type, cb file state, cb error, cd will trigger after file upload)
      fileListener.on(
        "state_changed",
        (snapshot) => {
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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
          alert("Submitted Successfully");
        }
      );

      // console.log("after");
    } catch (error) {
      console.log(error);
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

      <Row>
        <Col className="productLeftSection" xs={24} md={24} lg={10}>
          <ProductManufacturerSection setProductInfo={setProductInfo} />
        </Col>
        <Col className="productRightSection" xs={24} md={24} lg={14}>
          <ProductSampleForm setProductInfo={setProductInfo} />
          <div onClick={addProduct}>
            <AntButton background="#00818F" color="#ffff" text="Add Sample" />
          </div>
        </Col>
      </Row>
    </Content>
  );
};

export default Product;
