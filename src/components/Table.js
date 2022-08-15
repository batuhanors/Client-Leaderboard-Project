import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";

function UserList(props) {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Username</th>
          <th>Money</th>
          <th>Country</th>
          <th>Daily Diff</th>
        </tr>
      </thead>
      <tbody>
        {props.players.map((player, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{player.username}</td>
            <td>{player.money}</td>
            <td>{player.country}</td>
            <td> - </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default UserList;
