import Flickity from "react-flickity-component";
import "./flickity.css";
import useFirestore from "../Firestore/useFirestore";

export default function Carousel() {
  const { docs } = useFirestore('carousel')

  return (
    <Flickity>
      {docs.map((data) => ( <img key={data.id} src={data.url} alt='' width="640" height='480' className="caro" /> ))}
    </Flickity>
  );
} 