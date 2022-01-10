import { FC, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCinemas } from "../../../redux/async-actions/cinema";
import { RootState } from "../../../redux/reducer/rootReducer";
import { SERVER } from "../../../utils/constsPath";
import "./AboutCinema.scss";

const AboutCinema: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCinemas());
  }, []);
  const cinemas = useSelector((state: RootState) => state.cinemas);

  return (
    <Carousel fade className="carusel">
      {cinemas.map((item) => (
        <Carousel.Item>
          <img className="d-block image" src={SERVER + item.img} alt="First slide" />
          <Carousel.Caption>
            <h3>{item.name}</h3>
            <p>City {item.city}</p>
            <p>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default AboutCinema;
