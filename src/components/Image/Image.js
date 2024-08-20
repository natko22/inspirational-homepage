import React, { useState } from "react";
import mockImageData from "../../mockData/image";

const BackgroundImage = ({ setBackgroundImage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changeBackground = () => {
    const nextIndex = (currentIndex + 1) % mockImageData.length;
    setCurrentIndex(nextIndex);
    setBackgroundImage(mockImageData[nextIndex].url);
  };

  return (
    <div>
      <h2>Change the Background</h2>
      <button
        onClick={changeBackground}
        style={{
          padding: "10px",
          backgroundColor: "#1F363D",
          color: "#CFE0C3",
          border: "none",
          cursor: "pointer",
        }}
      >
        Change Background
      </button>
    </div>
  );
};

export default BackgroundImage;
