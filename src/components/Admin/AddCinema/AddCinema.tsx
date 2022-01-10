import React, { useState } from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createCinema } from "../../../redux/async-actions/cinema";

const AddCinema = () => {
  const dispatch = useDispatch();
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
    dispatch(createCinema(formData));
  };

  return (
    <div className="d-flex justify-content-between">
      <Form className="m-3" onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}>
        <h2 className="text-center">Add Cinema</h2>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <FormControl
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            type="text"
            placeholder="Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCity">
          <Form.Label>City</Form.Label>
          <Form.Control
            value={city}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCity(e.target.value)}
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDesc(e.target.value)}
            type="text"
            placeholder="Description"
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Control type="file" onChange={(e: any) => setFile(e.target.files[0])} />
        </Form.Group>
        <Button className="mt-3 align-self-end" variant="outline-success" type="submit" onClick={createNewCinema}>
          Create
        </Button>
      </Form>
    </div>
  );
};

export default AddCinema;
