import React, { useState, useEffect } from "react";
import "./App.css";
import UserTable from "./components/Table";
import Loading from "./components/Loader";

const axios = require("axios");

function App() {
  const [userList, setUserList] = useState(null);

  // get users when the page loads
  useEffect(() => {
    getUsers();
  }, []);

  //GetUsers Function
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
        setUserList(response.data);
      })
      .catch((err) => console.log(err));
  };

  //console.log(userList);

  return (
    <div className="App">
      <p className="Main-header">
        <span className="emoji">🏆</span> Leaderboard{" "}
        <span className="emoji">🏆</span>
      </p>
      <div>
        {userList ? (
          <div className="Table">
            {" "}
            <UserTable players={userList} />{" "}
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default App;
