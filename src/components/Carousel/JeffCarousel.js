import Flickity from "react-flickity-component";
import "./flickity.css";

export default function Carousel() {
  return (
    <Flickity>
      <img src="https://placeimg.com/640/480/animals" alt="" />
      <img src="https://placeimg.com/640/480/nature" alt="" />
      <img src="https://placeimg.com/640/480/architecture" alt="" />
      <img src="https://placeimg.com/640/480/tech" alt="" />
      <img src="https://placeimg.com/640/480/people" alt="" />

    </Flickity>
  );
} 