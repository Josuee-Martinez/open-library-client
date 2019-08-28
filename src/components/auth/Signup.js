import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alertcontext/alertContext";

const Signup = props => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;
  const { signup, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    if (error === "This E-mail is associated with another user.") {
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

  const handleSubmit = e => {
    e.preventDefault();
    signup({ user });
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h2>
          <i className="fas fa-users" /> Signup
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
          minLength="5"
        />
        <br />
        <button type="submit" className="button">
          Sign up!
        </button>
      </form>
      <div className="toggle-div">
        <Link to="/login" className="toggle-link">
          Already a member ?
        </Link>
      </div>
    </div>
  );
};

export default Signup;
