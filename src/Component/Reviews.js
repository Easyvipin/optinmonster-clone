import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.cjs.css";
import Micahel from "../images/michael.png";
import Neil from "../images/neilpatel.png";
const Reviews = () => {
  return (
    <section className="container-1 slider">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={24}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}>
            <div className="each-slide">
              <img src={Micahel} alt="" className="prof-icon" />
              <div className="rating">
                <span>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </span>
              </div>
              <p className="reviews">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
                incidunt vel eaque harum iste tempore eveniet ullam soluta, quod
                magnam!
              </p>
            </div>
          </Slide>
          <Slide index={1}>
            <div className="each-slide">
              <img src={Neil} alt="" className="prof-icon" />
              <div className="rating">
                <span>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </span>
              </div>
              <p className="reviews">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
                incidunt vel eaque harum iste tempore eveniet ullam soluta, quod
                magnam!
              </p>
            </div>
          </Slide>
          <Slide index={2}>
            <div className="each-slide">
              <img src={Micahel} alt="" className="prof-icon" />
              <div className="rating">
                <span>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </span>
              </div>
              <p className="reviews">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
                incidunt vel eaque harum iste tempore eveniet ullam soluta, quod
                magnam!
              </p>
            </div>
          </Slide>
        </Slider>
        <ButtonBack
          style={{
            position: "absolute",
            left: "10%",
            top: "50%",
            background: "none",
            border: "none",
            color: "whitesmoke",
            fontSize: "50px",
          }}
        >
          <i className="fas fa-angle-left dir-left"></i>
        </ButtonBack>
        <ButtonNext
          style={{
            position: "absolute",
            right: "10%",
            top: "50%",
            background: "none",
            border: "none",
            color: "whitesmoke",
            fontSize: "50px",
          }}
        >
          <i className="fas fa-angle-right dir-right"></i>
        </ButtonNext>
      </CarouselProvider>
    </section>
  );
};

export default Reviews;
