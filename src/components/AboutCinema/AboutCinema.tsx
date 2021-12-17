import { FC } from "react";
import { Carousel } from "react-bootstrap";
import "./AboutCinema.scss";

const AboutCinema: FC = () => {
  return (
    <Carousel fade className="carusel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://visit-petersburg.ru/media/uploads/tourobject/198842/198842_cover.jpeg.1050x700_q95_crop_upscale.jpg"
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
          src="https://image.freepik.com/free-photo/cinema-cinema-attributes-cinemas-films-online-viewing-popcorn-and-glasses_99433-1577.jpg"
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
          src="https://mag-cinema.com/image/catalog/News/2020/mammut2.jpg"
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
