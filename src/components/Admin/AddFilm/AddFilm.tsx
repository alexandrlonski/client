import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createFilm } from "../../../redux/async-actions/film";

const Admin = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>("");
  const [description, setDesc] = useState<string>("");
  const [file, setFile] = useState<string>("");

  const createNewFilm = (): void => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("img", file);
    dispatch(createFilm(formData));
  };

  return (
    <div className="d-flex justify-content-between">
      <Form className="m-3" onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}>
        <h2 className="text-center">Add Film</h2>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            type="text"
            placeholder="Title"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            value={description}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDesc(e.target.value)}
            type="text"
            placeholder="Description"
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Control type="file" onChange={(e: any) => setFile(e.target.files[0])} />
        </Form.Group>
        <Button className="mt-3 align-self-end" variant="outline-success" type="submit" onClick={createNewFilm}>
          Create
        </Button>
      </Form>
    </div>
  );
};

export default Admin;
