import { FC } from "react";
import { Table } from "react-bootstrap";

const Basket: FC = () => {
  return (
    <Table striped bordered hover size="md">
      <thead>
        <tr>
          <th>#</th>
          <th>Film Name</th>
          <th>Date</th>
          <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>MarkPolo</td>
          <td>date</td>
          <td>10$</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>date</td>
          <td>10$</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry the Bird</td>
          <td>date</td>
          <td>10$</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Basket;
