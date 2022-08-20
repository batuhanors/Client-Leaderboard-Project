import React, { useState } from "react";

import "./Table.css";

import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

const axios = require("axios");

function CustomTable() {
  const [show, setShow] = useState(false);
  const [showButton, setshowButton] = useState(true);

  const [player, setPlayer] = useState(null);

  const [enteredUsername, setEnteredUsername] = useState("");

  const playerData = { username: enteredUsername };

  const formHandler = (event) => {
    event.preventDefault();

    axios({
      method: "POST",
      url: "https://boiling-waters-49053.herokuapp.com/api/getIndividualPlayer",
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
      data: playerData,
    }).then((response) => {
      setPlayer(response.data);

      setShow(true);
      setshowButton(false);
    });
  };

  function PlayerTable(props) {
    if (props.isActive) {
      console.log(props.players);
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
            <tr key="1" className="custom-col">
              <td> {props.players.abovePlayerThreeIndex} </td>
              <td>{props.players.abovePlayerThree.username}</td>
              <td>{props.players.abovePlayerThree.money}</td>
              <td>{props.players.abovePlayerThree.country}</td>
              <td> - </td>
            </tr>
            <tr key="2" className="custom-col">
              <td> {props.players.abovePlayerTwoIndex}</td>
              <td>{props.players.abovePlayerTwo.username}</td>
              <td>{props.players.abovePlayerTwo.money}</td>
              <td>{props.players.abovePlayerTwo.country}</td>
              <td> - </td>
            </tr>
            <tr key="3" className="custom-col">
              <td> {props.players.abovePlayerOneIndex}</td>
              <td>{props.players.abovePlayerOne.username}</td>
              <td>{props.players.abovePlayerOne.money}</td>
              <td>{props.players.abovePlayerOne.country}</td>
              <td> - </td>
            </tr>
            <tr key="4" className="custom-col" style={{ color: "#3FA796" }}>
              <td> {props.players.requstedPlayerIndex} </td>
              <td>{props.players.requestedPlayer.username}</td>
              <td>{props.players.requestedPlayer.money}</td>
              <td>{props.players.requestedPlayer.country}</td>
              <td> - </td>
            </tr>
            <tr key="5" className="custom-col">
              <td>{props.players.belowPlayerOneIndex} </td>
              <td>{props.players.belowPlayerOne.username}</td>
              <td>{props.players.belowPlayerOne.money}</td>
              <td>{props.players.belowPlayerOne.country}</td>
              <td> - </td>
            </tr>
            <tr key="6" className="custom-col">
              <td> {props.players.belowPlayerTwoIndex}</td>
              <td>{props.players.belowPlayerTwo.username}</td>
              <td>{props.players.belowPlayerTwo.money}</td>
              <td>{props.players.belowPlayerTwo.country}</td>
              <td> - </td>
            </tr>
          </tbody>
        </Table>
      );
    }
  }

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  function CustomButton(props) {
    if (props.isActiveButton) {
      return (
        <>
          <span style={{ color: "#fff" }}>
            {" "}
            This button displays players whose rank is below 100{" "}
            {
              " (You can use the following players for demo: herdwarren, icecream, slendertailor, peacockhearts)"
            }
          </span>
          <div>
            <Form onSubmit={formHandler}>
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="enter a username"
                  className="custom-input"
                  value={enteredUsername}
                  onChange={usernameChangeHandler}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                style={{ marginBottom: "2.5rem" }}
              >
                Summon me!
              </Button>
            </Form>
          </div>
        </>
      );
    } else {
      <div></div>;
    }
  }

  return (
    <>
      <CustomButton isActiveButton={showButton} />
      <PlayerTable isActive={show} players={player} />
    </>
  );
}

export default CustomTable;
