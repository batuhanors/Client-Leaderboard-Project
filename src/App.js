import React, { useState, useEffect } from "react";
import "./App.css";
import UserTable from "./components/Table";
import Loading from "./components/Loader";
import PrizeModal from "./components/PrizeModal";
import EditModal from "./components/EditModal";
import CustomTable from "./components/CustomTable";

const axios = require("axios");

function App() {
  const [userList, setUserList] = useState(null);
  const [topPrizes, setTopPrizes] = useState(null);

  // get users when the page loads
  useEffect(() => {
    getUsers();
    getPrizes();
  }, []);

  //GetUsers Function
  const getUsers = async () => {
    await axios({
      method: "GET",
      url: "https://boiling-waters-49053.herokuapp.com/api/getUsers",
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        setUserList(response.data);
      })
      .catch((err) => console.log(err));
  };

  //console.log(userList);

  const getPrizes = async () => {
    await axios({
      method: "GET",
      url: "https://boiling-waters-49053.herokuapp.com/api/calculateMoney",
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response.data);
        setTopPrizes(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <p className="Main-header">
        <span className="emoji">🏆</span> Leaderboard{" "}
        <span className="emoji">🏆</span>
      </p>
      <div>
        {userList ? (
          <div>
            <div className="Table">
              {" "}
              <UserTable players={userList} />
              <CustomTable />
            </div>
            <div className="Prize-Modal">
              <PrizeModal prizes={topPrizes} />
            </div>
            <div className="Edit-Modal">
              <EditModal />
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default App;
