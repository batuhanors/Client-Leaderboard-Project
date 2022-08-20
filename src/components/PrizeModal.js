import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";

import Swal from "sweetalert2";

const axios = require("axios");

function PrizeModal(props) {
  const [show, setShow] = useState(false);
  const [enteredUsername, setEnteredUsername] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const formHandler = (event) => {
    event.preventDefault();
    const playerData = {
      username: enteredUsername,
    };

    axios({
      method: "POST",
      url: "http://localhost:3051/api/calculateIndividualPrize",
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
      data: playerData,
    })
      .then((response) => {
        Swal.fire({
          title: "You are in top 100!",
          text:
            "Congratulations " +
            enteredUsername +
            ". Your rank is: " +
            response.data.rank +
            " and your prize is: " +
            response.data.prize +
            " keep up and don't lose your rank!",
          icon: "success",
          confirmButtonText: "I won't 🦍",
        });
      })
      .catch((err) => {
        if (err.response.status === 404) {
          Swal.fire({
            title: "No 😥",
            text: "Unfortunately you are not in top 100, so you won't get any prize, however the week is not finished and try to rank up and make your way to the top 100! ",
            icon: "error",
            confirmButtonText: "I will 🦍",
          });
        }
      });
  };

  return (
    <>
      <Button variant="light" onClick={handleShow}>
        Click to See Prizes!
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>🥇 Top Prizes 🥇</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Current Prize Pool:{" "}
          <span style={{ color: "#71C562" }}>{props.prizes.prizePool}</span>
          <ListGroup variant="flush">
            <ListGroup.Item>
              1st Player gets: {props.prizes.firstPlayerPrize}
            </ListGroup.Item>
            <ListGroup.Item>
              2nd Player gets: {props.prizes.secondPlayerPrize}
            </ListGroup.Item>
            <ListGroup.Item>
              3rd Player gets: {props.prizes.thirdPlayerPrize}
            </ListGroup.Item>
          </ListGroup>
          <Form onSubmit={formHandler}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Check your prize!</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter a username"
                value={enteredUsername}
                onChange={usernameChangeHandler}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Check!
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PrizeModal;
