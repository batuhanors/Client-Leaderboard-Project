import React, { useState } from "react";
import "./App.css";
import UserTable from "./components/Table";

function App() {
  const [userList, setUserList] = useState([]);

  return (
    <div className="App">
      <p>Leaderboard</p>
      <div className="Table">
        <UserTable></UserTable>
      </div>
    </div>
  );
}

export default App;
