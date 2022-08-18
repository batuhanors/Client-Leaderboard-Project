import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import Swal from "sweetalert2";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

const axios = require("axios");

function EditModal() {
  const [show, setShow] = useState(false);

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredMoney, setEnteredMoney] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const formHandler = (event) => {
    event.preventDefault();

    const playerData = {
      username: enteredUsername,
      newMoneyAmount: enteredMoney,
    };

    axios({
      method: "POST",
      url: "http://localhost:3051/api/updatePlayer",
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
      data: playerData,
    })
      .then((response) => {
        Swal.fire({
          title: "Okay",
          text: "Updated!",
          icon: "success",
          confirmButtonText: "Hooray",
        }).then(() => {
          window.location.reload();
        });
      })
      .catch((err) => {
        if (err.response.status === 404) {
          Swal.fire({
            title: "Player does not exist",
            text: "there is no such player",
            icon: "error",
            confirmButtonText: "Try again",
          });
        }
      });
  };

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  const moneyChangeHandler = (e) => {
    setEnteredMoney(e.target.value);
  };

  return (
    <>
      <Button variant="light" onClick={handleShow}>
        Edit Rank <FontAwesomeIcon icon={faGear} />
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Update a Player's Money</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={formHandler}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter a username"
                value={enteredUsername}
                onChange={usernameChangeHandler}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="money">
              <Form.Label>New Money</Form.Label>
              <Form.Control
                type="text"
                placeholder="enter an amount"
                onChange={moneyChangeHandler}
                value={enteredMoney}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Gimme Money 🤑
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {" "}
            Close{" "}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditModal;
