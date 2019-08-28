import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alertcontext/AlertState";
import BookState from "./context/bookcontext/BookState";

import setToken from "./utils/setToken";

import "./App.css";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Navigation from "./components/home/Navigation";
import About from "./components/home/About";
import Home from "./components/home/Home";
import Alerts from "./components/home/Alerts";
import PrivateRoute from "./components/routing/PrivateRoute";

if (localStorage.token) {
  setToken(localStorage.token);
}

function App() {
  return (
    <AuthState>
      <BookState>
        <AlertState>
          <Router>
            <Navigation />
            <Alerts />
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/about" component={About} />
            </Switch>
          </Router>
        </AlertState>
      </BookState>
    </AuthState>
  );
}

export default App;
