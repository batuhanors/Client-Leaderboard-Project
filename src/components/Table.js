import React from "react";

import "./Table.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function UserList(props) {
  //Displaying daily diff fun
  function DailyDiff(props) {
    if (props.diff === 0) {
      return <td className="daily-diff"> - </td>;
    } else if (props.diff > 0) {
      //rank up, green
      return (
        <td style={{ color: "#71C562" }} className="daily-diff">
          {<FontAwesomeIcon icon={faAngleUp} />} {"     "}
          {props.diff}{" "}
        </td>
      );
    }
    //rank down, red
    else
      return (
        <td style={{ color: "#A7171A" }} className="daily-diff">
          {<FontAwesomeIcon icon={faAngleDown} />} {"     "}
          {props.diff}{" "}
        </td>
      );
  }

  return (
    <Table striped hover variant="dark" className="table">
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
            <DailyDiff diff={player.dailyDiff}></DailyDiff>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default UserList;
