import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";

const axios = require("axios");

function BasicExample() {
  const getUsers = async () => {
    await axios({
      method: "GET",
      url: "http://localhost:3051/api/getUsers",
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  getUsers();

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Username</th>
          <th>Money</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>batuhanors</td>
          <td>500</td>
          <td>Turkey</td>
        </tr>
        <tr>
          <td>2</td>
          <td>bootyexpansion</td>
          <td>496</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>3</td>
          <td>fardpizza</td>
          <td>485</td>
          <td>Uganda</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default BasicExample;
