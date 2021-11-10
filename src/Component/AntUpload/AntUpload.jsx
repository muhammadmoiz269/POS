import React, { useState } from "react";
import { Upload, message } from "antd";
import "./AntUpload.css";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJPG = file.type === "image/jpeg";
  if (!isJPG) {
    message.error("You can only upload JPG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJPG && isLt2M;
}

const AntUpload = ({ setProductInfo, value }) => {
  const [loading, setloading] = useState(false);
  const [image, setimage] = useState(false);
  const imageUrl = image;

  const handleChange = (info) => {
    console.log("image");
    if (info.file.status === "uploading") {
      setloading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(
        info.file.originFileObj,
        (imageUrl) => setloading(false),
        setimage(imageUrl)
      );
    }
    console.log("image ", info.file);
    setProductInfo(info.file, value);
  };
  const uploadButton = (
    <div>
      <div type={loading ? "loading" : "plus"} />
      <div className="ant-upload-text">Upload</div>
    </div>
  );
  return (
    <div>
      <Upload
        maxCount={1}
        multiple={false}
        name="avatar"
        listType="picture-card"
        // className="avatar-uploader"
        showUploadList={true}
        action="//jsonplaceholder.typicode.com/posts/"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
      </Upload>
    </div>
  );
};

export default AntUpload;