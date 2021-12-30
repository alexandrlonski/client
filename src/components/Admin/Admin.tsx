import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createFilm } from "../../redux/async-actions/film";

const Admin = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>("");
  const [description, setDesc] = useState<string>("");
  const [file, setFile] = useState<any>(null);

  const create = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("img", file);
    dispatch(createFilm(formData));
  };

  return (
    <Form onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}>
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
      <Button className="mt-3 align-self-end" variant="outline-success" type="submit" onClick={create}>
        Create
      </Button>
    </Form>
  );
};

export default Admin;
