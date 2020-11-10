import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import "./App.css";
import AddTransaction from "./components/AddTransaction";
import Transactions from "./components/views/Transactions";
import Pulpit from "./components/views/Pulpit";

import { GlobalContextProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalContextProvider>
    <Router>
    <div className="App">
      <div className="wrapper">
        <div className="panel">
          <h3>my budget app</h3>
          <ul className="views">
            <NavLink activeClassName="is-active" exact to="/">pulpit</NavLink>
            
            <NavLink activeClassName="is-active" to="/transactions">history transaction</NavLink>
          </ul>
          <div className="content">
          <Switch>
            <Route exact path="/" component={Pulpit}/>
            <Route path='/transactions' component={Transactions}/>
          </Switch>
          </div>
        </div>
        <AddTransaction />
      </div>
    </div>
    </Router>
    </GlobalContextProvider>
  );
}

export default App;
