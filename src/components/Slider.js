import React, { useState } from "react";
import { FaExpand } from "react-icons/fa";
import data from "../images/data";

const Slider = () => {
  const [imgIndex, setImgIndex] = useState(0);
  return (
    <div className="slider">
      <div className="image-wrapper">
        <div className="image-order">
          <span>1 / 20</span>
        </div>
        <img src={data[imgIndex].url} alt={data[imgIndex].url} />
        <div className="btn-zoom">
          <button>
            <FaExpand />
          </button>
        </div>
      </div>
      <div className="thumbnails">
        {data.map((item, index) => {
          return (
            <img
              src={item.url}
              alt={item.url}
              key={item.id}
              onClick={() => setImgIndex(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
