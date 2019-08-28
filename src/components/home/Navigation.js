import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import BookContext from "../../context/bookcontext/bookContext";

const Navigation = () => {
  const authContext = useContext(AuthContext);
  const bookContext = useContext(BookContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearBooks } = bookContext;

  const onLogout = () => {
    logout();
    clearBooks();
  };

  const authLinks = (
    <Fragment>
      <li>
        <a href="#!" onClick={onLogout}>
          <i className="fas fa-sign-out-alt"></i>
        </a>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/about">About</Link>
      </li>
    </Fragment>
  );
  return (
    <nav>
      <h1 className="logo">
        <Link to="/">
          Book Saver <i class="fas fa-book-reader"></i>
        </Link>
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </nav>
  );
};

export default Navigation;
