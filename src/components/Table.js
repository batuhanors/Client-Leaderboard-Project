import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";

function UserList(props) {
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
        {props.players.map((player, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{player.username}</td>
            <td>{player.money}</td>
            <td>{player.country}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default UserList;
