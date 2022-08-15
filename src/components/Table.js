import React from "react";

import "./Table.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";

function UserList(props) {
  return (
    <Table striped hover variant="dark">
      <thead>
        <tr className="custom-col">
          <th>Rank</th>
          <th>Username</th>
          <th>Money</th>
          <th>Country</th>
          <th>Daily Diff</th>
        </tr>
      </thead>
      <tbody>
        {props.players.map((player, index) => (
          <tr key={index} className="custom-col">
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
