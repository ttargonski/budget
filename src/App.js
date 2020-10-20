import React from "react";
import "./App.css";
import AddTransaction from "./components/AddTransaction";
import Transactions from "./components/views/Transactions";
import Pulpit from "./components/views/Pulpit";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="panel">
          <h3>my budget app</h3>
          <ul className="views">
            <li className="active">pulpit</li>
            <li>history transaction</li>
          </ul>
          <div className="content">
            <Pulpit />
            {/* <Transactions /> */}
          </div>
        </div>
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
