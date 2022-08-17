import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";

const axios = require("axios");

function PrizeModal() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    getPrizes();
  }, []);

  const [topPrizes, setTopPrizes] = useState(null);

  const getPrizes = async () => {
    await axios({
      method: "GET",
      url: "http://localhost:3051/api/calculateMoney",
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response.data.isPrizeAvailable);
        setTopPrizes(response.data);
      })
      .catch((err) => console.log(err));
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
          <span style={{ color: "#71C562" }}>{topPrizes.prizePool}</span>
          <ListGroup variant="flush">
            <ListGroup.Item>
              1st Player gets: {topPrizes.firstPlayerPrize}
            </ListGroup.Item>
            <ListGroup.Item>
              2nd Player gets: {topPrizes.secondPlayerPrize}
            </ListGroup.Item>
            <ListGroup.Item>
              3rd Player gets: {topPrizes.thirdPlayerPrize}
            </ListGroup.Item>
          </ListGroup>
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
