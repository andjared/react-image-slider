import React, { useRef, useState } from "react";
import { FaCompressArrowsAlt, FaExpand } from "react-icons/fa";
import data from "../images/data";

const Slider = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const thumbnailRef = useRef();

  const handleFullScreen = () => {
    if (isFullScreen) {
      setIsFullScreen(false);
      document.exitFullscreen();
    } else {
      setIsFullScreen(true);
      document.documentElement.requestFullscreen();
    }
  };

  const handleClick = (index) => {
    const scrollWidth = thumbnailRef.current.offsetWidth;
    if (index > imgIndex) {
      thumbnailRef.current.scrollLeft += scrollWidth / 2;
    }
    if (index < imgIndex) {
      thumbnailRef.current.scrollLeft -= scrollWidth / 2;
    }
    setImgIndex(index);
  };

  return (
    <div className={isFullScreen ? "full-screen" : "slider"}>
      <div className="image-wrapper">
        <div className="image-order">
          <span>
            {imgIndex + 1} / {data.length - 1}
          </span>
        </div>
        <img src={data[imgIndex].url} alt={data[imgIndex].url} />
        <div className="fs-toggle">
          <button onClick={handleFullScreen}>
            {isFullScreen ? <FaCompressArrowsAlt /> : <FaExpand />}
          </button>
        </div>
      </div>
      <div className="thumbnails" ref={thumbnailRef}>
        {data.map((item, index) => {
          return (
            <div
              key={item.id}
              className={index === imgIndex ? "active" : "thumbnail"}
            >
              <img
                src={item.url}
                alt={item.url}
                onClick={() => handleClick(index)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
