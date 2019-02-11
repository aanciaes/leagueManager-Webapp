import React, { Component } from "react";
import Slider from "react-slick";
import RandomGif from "../randomGif.gif";

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
      <div className={"slickHomeWrapper slickNewsHomeWrapper"}>
        <Slider {...settings}>
		  
          <div className={"news-wrapper highlight"}>
              <div className={"text-wrapper"}>
                  <h1>News Number 0</h1>
                  <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
              </div>
              <div className={"image-wrapper"}>
                <img src={RandomGif} alt={""}/>
              </div>
          </div>
            <div className={"news-wrapper"}>
                <div className={"image-wrapper"}>
                    <img src={RandomGif} alt={""}/>
                </div>
                <div className={"text-wrapper"}>
                    <h1>News Number 1</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

            </div>
            <div className={"news-wrapper"}>
                <div className={"text-wrapper"}>
                    <h1>News Number 2</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className={"image-wrapper"}>
                    <img src={RandomGif} alt={""}/>
                </div>
            </div>
            <div className={"news-wrapper"}>
                <div className={"image-wrapper"}>
                    <img src={RandomGif} alt={""}/>
                </div>
                <div className={"text-wrapper"}>
                    <h1>News Number 3</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
          
        </Slider>
      </div>
    );
  }
}