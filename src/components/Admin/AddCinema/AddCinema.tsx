import React, { useState } from "react";
import { Form, Button, FormControl, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createCinema } from "../../../redux/async-actions/cinema";
import filmMok from "../../../assets/film/mok.jpg";

const AddCinema = () => {
  const fileInput: HTMLInputElement | null =
    document.querySelector(".cinema-image");
  const imgBlock: HTMLImageElement | null =
    document.querySelector("#cinema-image");

  if (fileInput && imgBlock) {
    const fileList = fileInput.files;
    const file = fileList ? fileList[0] : null;
    fileInput.addEventListener("change", () => {
      imgBlock.src = file ? URL.createObjectURL(file) : "";
    });
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [description, setDesc] = useState<string>("");
  const [file, setFile] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [city, setCity] = useState<string>("");

  const createNewCinema = (): void => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("city", city);
    formData.append("description", description);
    formData.append("img", file);
    dispatch(createCinema(formData, navigate));
  };

  return (
    <div className="d-flex justify-content-between">
      <Form
        className="m-3"
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}>
        <h2 className="text-center">Add Cinema</h2>
        <Card.Img
          variant="top"
          id="cinema-image"
          className="film-image cover mb-3"
          src={filmMok}
        />
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <FormControl
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            type="text"
            placeholder="Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCity">
          <Form.Label>City</Form.Label>
          <Form.Control
            value={city}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCity(e.target.value)
            }
            type="text"
            placeholder="City"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            value={description}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDesc(e.target.value)
            }
            type="text"
            placeholder="Description"
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Control
            className="cinema-file"
            type="file"
            onChange={(e: any) => setFile(e.target.files[0])}
          />
        </Form.Group>
        <Button
          className="mt-3 align-self-end"
          variant="outline-success"
          type="submit"
          onClick={createNewCinema}>
          Create
        </Button>
      </Form>
    </div>
  );
};

export default AddCinema;
