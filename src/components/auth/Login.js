import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alertcontext/alertContext";

const Login = props => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    if (
      error === "This E-mail is not associated with a user." ||
      error === "The password you have entered is invalid"
    ) {
      setAlert(error, "danger");
      clearErrors();
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const { email, password } = user;

  const handleChange = e =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    login({ user });
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <h2>
          <i className="fas fa-users" /> Login
        </h2>
        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="email"
          id="email"
          className="input"
          name="email"
          required
          value={email}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input
          type="password"
          id="password"
          className="input"
          name="password"
          required
          value={password}
          onChange={handleChange}
        />
        <br />
        <button type="submit" className="button">
          Log in!
        </button>
      </form>
      <div className="toggle-div">
        <Link to="/signup" className="toggle-link">
          Don't have an account ?
        </Link>
      </div>
    </div>
  );
};

export default Login;
