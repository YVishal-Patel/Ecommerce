

import React, { Component } from "react";
import Slider from "react-slick";
import img1 from '../img10.webp'
import img2 from '../img11.webp'
import img3 from '../img13.webp'
import img4 from '../img14.webp'
import img5 from '../img4.webp'
import img7 from '../img20.webp'
import img6 from '../img10.webp'

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
          <img src={img2} className="img-size-carousel" alt="" />
          <div className="carousel-data">
            <p className="card-type-name">Trendiest Material</p>
            <p className="card-type-price">Under ₹599</p>
            <p className="card-type-discount">top discount ever</p>
            </div>
          </div>
          <div className="main-carousel-div">
          <img src={img3} className="img-size-carousel" alt="" />
          <div className="carousel-data">
            <p className="card-type-name">Trendiest Material</p>
            <p className="card-type-price">Under ₹599</p>
            <p className="card-type-discount">top discount ever</p>
            </div>
          </div>
          <div className="main-carousel-div">
          <img src={img4} className="img-size-carousel" alt="" />
          <div className="carousel-data">
            <p className="card-type-name">Trendiest Material</p>
            <p className="card-type-price">Under ₹599</p>
            <p className="card-type-discount">top discount ever</p>
            </div>
          </div>
          <div className="main-carousel-div">
          <img src={img5} className="img-size-carousel" alt="" />
          <div className="carousel-data">
            <p className="card-type-name">Trendiest Material</p>
            <p className="card-type-price">Under ₹599</p>
            <p className="card-type-discount">top discount ever</p>
            </div>
          </div>
          <div className="main-carousel-div">
          <img src={img6} className="img-size-carousel" alt="" />
          <div className="carousel-data">
            <p className="card-type-name ">Trendiest Material</p>
            <p className="card-type-price">Under ₹599</p>
            <p className="card-type-discount">top discount ever</p>
            </div>
          </div>
          <div className="main-carousel-div">
          <img src={img7} className="img-size-carousel" alt="" />
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


// -------------------------- For Small Screen  -----------------------------------------