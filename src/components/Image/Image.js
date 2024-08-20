// src/components/Image/Image.js
import React from "react";
import mockImageData from "../../mockData/image";

const Image = () => {
  return (
    <div>
      <h2>Inspirational Image</h2>
      <img
        src={mockImageData.url}
        alt={mockImageData.alt}
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default Image;
