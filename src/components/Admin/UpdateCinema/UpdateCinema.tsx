import React, { useState } from "react";
import { Button, Card, Form, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateCinema } from "../../../redux/async-actions/cinema";
import { RootState } from "../../../redux/reducer/rootReducer";
import { SERVER } from "../../../utils/constsPath";

const UpdateCinema = () => {
  const fileInput: HTMLInputElement | null = document.querySelector(
    ".cinema-update-file"
  );
  const imgBlock: HTMLImageElement | null = document.querySelector(
    "#cinema-update-image"
  );

  if (fileInput && imgBlock) {
    const fileList = fileInput.files;
    const fileImg = fileList ? fileList[0] : null;
    fileInput.addEventListener("change", () => {
      imgBlock.src = fileImg ? URL.createObjectURL(fileImg) : "";
    });
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id, name, city, description, img } = useSelector(
    (state: RootState) => state.cinema
  );
  const initState = {
    initName: name,
    initCity: city,
    initDescription: description,
    initFile: img,
  };
  const [newDescription, setDesc] = useState<string>(initState.initDescription);
  const [newFile, setFile] = useState<string>(initState.initFile);
  const [newName, setName] = useState<string>(initState.initName);
  const [newCity, setCity] = useState<string>(initState.initCity);

  const updateOldCinema = (): void => {
    const formData = new FormData();
    formData.append("name", newName);
    formData.append("city", newCity);
    formData.append("description", newDescription);
    formData.append("img", newFile);
    dispatch(updateCinema(id, formData, navigate));
  };

  return (
    <div className="d-flex justify-content-between">
      <Form
        className="m-3"
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}>
        <h2 className="text-center">Update Cinema</h2>
        <Card.Img
          variant="top"
          id="cinema-update-image"
          className="film-image cover mb-3"
          src={SERVER + img}
        />
        <Form.Group className="mb-3 " controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <FormControl
            value={newName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            type="text"
            placeholder="Name"
          />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="formBasicCity">
          <Form.Label>City</Form.Label>
          <Form.Control
            value={newCity}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCity(e.target.value)
            }
            type="text"
            placeholder="City"
          />
        </Form.Group>
        <Form.Group className="mb-3 " controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            value={newDescription}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDesc(e.target.value)
            }
            type="text"
            placeholder="Description"
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3  ">
          <Form.Control
            type="file"
            className="cinema-update-file"
            onChange={(e: any) => setFile(e.target.files[0])}
          />
        </Form.Group>
        <Button
          className="mt-3 align-self-end"
          variant="outline-success"
          type="submit"
          onClick={updateOldCinema}>
          Update
        </Button>
      </Form>
    </div>
  );
};
export default UpdateCinema;
