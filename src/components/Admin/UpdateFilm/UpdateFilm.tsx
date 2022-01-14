import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateFilm } from "../../../redux/async-actions/film";
import { RootState } from "../../../redux/reducer/rootReducer";
import { SERVER } from "../../../utils/constsPath";

const UpdateFilm = () => {
  const fileInput: HTMLInputElement | null =
    document.querySelector(".film-update-file");
  const imgBlock: HTMLImageElement | null =
    document.querySelector("#film-update-image");

  if (fileInput && imgBlock) {
    const fileList = fileInput.files;
    const fileImg = fileList ? fileList[0] : null;
    fileInput.addEventListener("change", () => {
      imgBlock.src = fileImg ? URL.createObjectURL(fileImg) : "";
    });
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id, title, description, img } = useSelector(
    (state: RootState) => state.film
  );
  const initState = {
    initTitle: title,
    initDescription: description,
    initFile: img,
  };
  const [newTitle, setTitle] = useState<string>(initState.initTitle);
  const [newDescription, setDesc] = useState<string>(initState.initDescription);
  const [newfile, setFile] = useState<string>(initState.initFile);

  const updateOldFilm = (): void => {
    const formData = new FormData();
    formData.append("title", newTitle);
    formData.append("description", newDescription);
    formData.append("img", newfile);
    dispatch(updateFilm(id, formData, navigate));
  };
  return (
    <div className="d-flex justify-content-between">
      <Form
        className=" m-3 "
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}>
        <h2 className="text-center">Update Film</h2>
        <Card.Img
          variant="top"
          id="film-update-image"
          className="film-image cover mb-3"
          src={SERVER + img}
        />
        <Form.Group className=" mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={newTitle}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
            type="text"
            placeholder="Title"
          />
        </Form.Group>
        <Form.Group className=" mb-3" controlId="exampleForm.ControlTextarea1">
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
        <Form.Group controlId="formFile" className=" mb-3">
          <Form.Control
            className="film-update-file"
            type="file"
            onChange={(e: any) => setFile(e.target.files[0])}
          />
        </Form.Group>
        <Button
          className="mt-3 align-self-end"
          variant="outline-success"
          type="submit"
          onClick={updateOldFilm}>
          Update
        </Button>
      </Form>
    </div>
  );
};

export default UpdateFilm;
