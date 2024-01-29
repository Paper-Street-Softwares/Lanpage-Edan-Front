import React from "react";
import { Carousel } from "antd";
const contentStyle = {
  lineHeight: "160px",
};
const Slider = () => (
  <Carousel autoplay>
    <div className="bg-green-200 text-center h-40 text-white">
      <h3 style={contentStyle}>0001</h3>
    </div>
    <div className="bg-green-200 text-center h-40 text-white">
      <h3 style={contentStyle}>0002</h3>
    </div>
    <div className="bg-green-200 text-center h-40 text-white">
      <h3 style={contentStyle}>
        0003
      </h3>
    </div>
    <div className="bg-green-200 text-center h-40 text-white">
      <h3 style={contentStyle}>0004</h3>
    </div>
  </Carousel>
);
export default Slider;
