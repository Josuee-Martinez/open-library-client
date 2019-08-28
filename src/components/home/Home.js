import React, { useContext, useEffect, Fragment } from "react";
import AuthContext from "../../context/auth/authContext";

import Books from "../books/Books";
import BookForm from "../books/BookForm";
import BookFilter from "../books/BookFilter";

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <BookForm />
      <BookFilter />
      <Books />
    </Fragment>
  );
};

export default Home;
