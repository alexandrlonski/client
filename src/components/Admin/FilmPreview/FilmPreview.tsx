import { FC } from "react";
import { Button, Card } from "react-bootstrap";
import { IFilm } from "../../../types/film";
import { SERVER } from "../../../utils/constsPath";

const FilmPreview: FC<IFilm> = (props) => {
  const { description, img, title } = props;

  return (
    <Card className="w-100 flex-row">
      <Card.Img variant="top" className="w-50" src={SERVER + img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="secondary" className="link button cursor">
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
};

export default FilmPreview;
