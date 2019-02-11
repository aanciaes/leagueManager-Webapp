import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
	  arrows : false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className={"slickHomeWrapper"}>
        <Slider {...settings}>
		  
          <div className={"wrapper"}>SOME TEXT
          </div>
          <div className={"wrapper"}>SOME OTHER TEXT
          </div>
          <div className={"wrapper"}>SOME OTHER OTHER TEXT
          </div>
          <div className={"wrapper"}>SOME OTHER OTHER OTHER TEXT
          </div>
          
        </Slider>
      </div>
    );
  }
}