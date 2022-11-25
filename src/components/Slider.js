import React from "react";
import data from "../images/data";

const Slider = () => {
  return (
    <div className="slider">
      <div className="image-wrapper">
        <div className="image-order">
          <span>1 / 20</span>
        </div>
        <img src={data[0].url} alt="" />
        <div className="btn-zoom">
          <button>zoom</button>
        </div>
      </div>
      <div className="thumbnails">
        {data.map((item) => {
          return <img src={item.url} alt={item.url} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Slider;
