import { FC } from "react";
import { Carousel } from "react-bootstrap";
import {
  IMAGE_CINEMA_MINSK,
  IMAGE_CINEMA_VITEBSK,
  IMAGE_CINEMA_BREST,
} from "../../data/cinemaImage";
import "./AboutCinema.scss";

const AboutCinema: FC = () => {
  return (
    <Carousel fade className="carusel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={IMAGE_CINEMA_MINSK}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={IMAGE_CINEMA_VITEBSK}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={IMAGE_CINEMA_BREST}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default AboutCinema;
