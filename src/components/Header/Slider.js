import React, { useRef } from "react";
import Carousel from "react-elastic-carousel";
import "./Slider.scss";
import { sliderData } from "../utils/Data";

const Slider = () => {
  const carouselRef = useRef(null);
  const onNextStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      // we hit the last item, go to first item
      carouselRef.current.goTo(0);
    }
  };

  const onPrevStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      // we hit the first item, go to last item
      carouselRef.current.goTo(sliderData.length);
    }
  };
  return (
    <div className="slider-container">
      <Carousel
        ref={carouselRef}
        enableAutoPlay={true}
        autoPlaySpeed={6000}
        onPrevStart={onPrevStart}
        onNextStart={onNextStart}
        disableArrowsOnEnd={false}
      >
        {sliderData.map((item) => (
          <div
            className="slider-item"
            style={{
              backgroundImage: item.img,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            key={item.id}
          >
            <h1>{item.title}</h1>
            <p>{item.text}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
