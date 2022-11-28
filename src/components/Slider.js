import React, { useRef, useState } from "react";
import { FaExpand } from "react-icons/fa";
import data from "../images/data";

const Slider = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const thumbnailRef = useRef();

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
    <div className="slider">
      <div className="image-wrapper">
        <div className="image-order">
          <span>
            {imgIndex + 1} / {data.length - 1}
          </span>
        </div>
        <img src={data[imgIndex].url} alt={data[imgIndex].url} />
        <div className="btn-zoom">
          <button>
            <FaExpand />
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
