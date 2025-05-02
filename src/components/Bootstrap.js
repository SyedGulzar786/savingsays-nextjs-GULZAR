import { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function BootstrapCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const bootstrap = [
    {
        "id":1,
        "title":"saaad",
        "body":"sadsadasdsadadaddas"

    },
    {
        "id":2,
        "title":"saaad",
        "body":"sadsadasdsadadaddas"

    },
    {
        "id":3,
        "title":"saaad",
        "body":"sadsadasdsadadaddas"

    },
    {
        "id":4,

        "title":"saaad",
        "body":"sadsadasdsadadaddas"

    },
];
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {bootstrap.map((item) => (
        <Carousel.Item key={item.id} interval={4000}>
          {/* <img src={item.imageUrl} alt="slides" /> */}
          <Carousel.Caption >
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <button className="btn btn-danger">Visit Docs</button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
