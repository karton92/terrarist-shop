import React from "react";
import Carousel from "react-elastic-carousel";
import slide1 from "../../images/slide1.jpg";
import "./Slider.scss";

const sliderData = [
  {
    id: 0,
    img: `url("https://i.imgur.com/G8FV3Tz.jpg")`,
    title: "First slide",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus optio fugit delectus quam possimus et eum?",
  },
  {
    id: 1,
    img: `url("https://images5.alphacoders.com/449/thumb-1920-449483.jpg")`,
    title: "Second slide",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus optio fugit delectus quam possimus et eum?",
  },
  {
    id: 2,
    img: `url("https://wallpaperaccess.com/full/31189.jpg")`,
    title: "Third slide",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus optio fugit delectus quam possimus et eum?",
  },
];

function Slider() {
  return (
    <div className="slider-container">
      <Carousel>
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
}

export default Slider;
