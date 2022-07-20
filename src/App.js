import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import "./Styles/App.css";
import AddTransaction from "./components/AddTransaction";
import HistoryTransaction from "./components/views/HistoryTransaction";
import Home from "./components/views/Home";

import { GlobalContextProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalContextProvider>
      <Router>
        <div className="App">
          <div className="wrapper">
            <h1>Your budget</h1>
            <ul className="nav">
              <li>
                <NavLink activeClassName="is-active" exact to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="is-active" to="/transaction-history">
                  Transaction history
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="is-active" to="/add-transaction">
                  Add transaction
                </NavLink>
              </li>
            </ul>
            <div className="content">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route
                  path="/transaction-history"
                  component={HistoryTransaction}
                />
                <Route path="/add-transaction" component={AddTransaction} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </GlobalContextProvider>
  );
}

export default App;
