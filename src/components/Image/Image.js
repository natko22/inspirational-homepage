import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchImages } from "../../features/imageSlice";

const BackgroundImage = ({ setBackgroundImage }) => {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.image.data || []);
  const status = useSelector((state) => state.image.status);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [query, setQuery] = useState("nature"); // Default query

  useEffect(() => {
    dispatch(fetchImages(query));
  }, [dispatch, query]);

  useEffect(() => {
    if (images.length > 0) {
      console.log("Initial background image set:", images[0]?.urls?.regular);
      setBackgroundImage(images[0]?.urls?.regular);
    }
  }, [images, setBackgroundImage]);

  const changeBackground = () => {
    if (images.length > 0) {
      const nextIndex = (currentIndex + 1) % images.length;
      console.log("Changing background to:", images[nextIndex]?.urls?.regular);
      setCurrentIndex(nextIndex);
      setBackgroundImage(images[nextIndex]?.urls?.regular || "");
    }
  };

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    dispatch(fetchImages(query));
    setCurrentIndex(0); // Reset index when a new search is performed
  };

  return (
    <div>
      <h2>Change the Background</h2>
      <input
        type="text"
        value={query}
        onChange={handleQueryChange}
        placeholder="Search for images..."
        style={{
          padding: "5px",
          marginBottom: "10px",
          borderRadius: "5px",
          border: "1px solid #1F363D",
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: "10px",
          backgroundColor: "#40798C",
          color: "#CFE0C3",
          border: "none",
          cursor: "pointer",
          marginRight: "10px",
        }}
      >
        Search Images
      </button>
      <button
        onClick={changeBackground}
        style={{
          padding: "10px",
          backgroundColor: "#1F363D",
          color: "#CFE0C3",
          border: "none",
          cursor: "pointer",
        }}
        disabled={images.length === 0}
      >
        Change Background
      </button>
      {status === "loading" && <p>Loading images...</p>}
      {status === "failed" && <p>Error loading images.</p>}
    </div>
  );
};

export default BackgroundImage;
