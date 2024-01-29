import React, { Component } from "react";
import Slider from "react-slick";
import CongratCard from "../OurServicesAndIcons/CongratCard";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <div>
        <Slider {...settings}>
          <CongratCard />
          <CongratCard />
          <CongratCard />
          <CongratCard />
          <CongratCard />
          <CongratCard />
          <CongratCard />
          <CongratCard />
          <CongratCard />
        </Slider>
      </div>
    );
  }
}
