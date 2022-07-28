

import React, { Component } from "react";
import Slider from "react-slick";
import img1 from '../img10.webp'
import '../SignUp/SignUp.css'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, color:"black", display: "block", background:'linear-gradient(#8360c3, #009FFF)', borderRadius:"50%" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",  background:'linear-gradient(#8360c3, #009FFF)',  borderRadius:"50%"  }}
      onClick={onClick}
    />
  );
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow  />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div className="carouel-slider-main">
        <Slider {...settings} >
          <div className="main-carousel-div">
            <img src={img1} className="img-size-carousel" alt="" />
            <div className="carousel-data">
            <p  className="card-type-name">Trendiest Material</p>
            <p className="card-type-price">Under ₹599</p>
            <p className="card-type-discount">top discount ever</p>
            </div>
          </div>
          <div className="main-carousel-div">
          <img src={img1} className="img-size-carousel" alt="" />
          <div className="carousel-data">
            <p className="card-type-name">Trendiest Material</p>
            <p className="card-type-price">Under ₹599</p>
            <p className="card-type-discount">top discount ever</p>
            </div>
          </div>
          <div className="main-carousel-div">
          <img src={img1} className="img-size-carousel" alt="" />
          <div className="carousel-data">
            <p className="card-type-name">Trendiest Material</p>
            <p className="card-type-price">Under ₹599</p>
            <p className="card-type-discount">top discount ever</p>
            </div>
          </div>
          <div className="main-carousel-div">
          <img src={img1} className="img-size-carousel" alt="" />
          <div className="carousel-data">
            <p className="card-type-name">Trendiest Material</p>
            <p className="card-type-price">Under ₹599</p>
            <p className="card-type-discount">top discount ever</p>
            </div>
          </div>
          <div className="main-carousel-div">
          <img src={img1} className="img-size-carousel" alt="" />
          <div className="carousel-data">
            <p className="card-type-name">Trendiest Material</p>
            <p className="card-type-price">Under ₹599</p>
            <p className="card-type-discount">top discount ever</p>
            </div>
          </div>
          <div className="main-carousel-div">
          <img src={img1} className="img-size-carousel" alt="" />
          <div className="carousel-data">
            <p className="card-type-name ">Trendiest Material</p>
            <p className="card-type-price">Under ₹599</p>
            <p className="card-type-discount">top discount ever</p>
            </div>
          </div>
          <div className="main-carousel-div">
          <img src={img1} className="img-size-carousel" alt="" />
          <div className="carousel-data">
            <p className="card-type-name">Trendiest Material</p>
            <p className="card-type-price">Under ₹599</p>
            <p className="card-type-discount">top discount ever</p>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}