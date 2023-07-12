import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../assets/carousel/1.jpg";
import image2 from "../../assets/carousel/2.jpg";
import image3 from "../../assets/carousel/3.jpg";

function Main() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={image1} alt="First slide" />
        <Carousel.Caption>
          <h3>JORDAN ESSENTIALS</h3>
          <p>New Arrivals.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="d-block w-100" src={image2} alt="Second slide" />
        <Carousel.Caption>
          <h3>NIKE ESSENTIALS</h3>
          <p>Just in.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image3} alt="Third slide" />
        <Carousel.Caption>
          <h3>VANS ESSENTIALS</h3>
          <p>The latest drop.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Main;
