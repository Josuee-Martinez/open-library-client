import React, { useReducer } from "react";
import axios from "axios";
import uuid from "uuid";
import bookReducer from "./bookReducer";
import BookContext from "./bookContext";
import {
  ADD_BOOK,
  DELETE_BOOK,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_BOOK,
  FILTER_BOOKS,
  CLEAR_FILTERED,
  BOOK_ERROR,
  GET_BOOKS,
  CLEAR_BOOKS
} from "../types";

const BookState = props => {
  const initialState = {
    books: [],
    current: null,
    filtered: null,
    error: null
  };

  const [state, dispatch] = useReducer(bookReducer, initialState);

  const fetchBooks = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/books");
      dispatch({ type: GET_BOOKS, payload: res.data.books });
    } catch (err) {
      dispatch({ type: BOOK_ERROR, payload: err.response.msg });
    }
  };

  const addBook = async book => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post(
        "http://localhost:3000/api/books",
        book,
        config
      );
      dispatch({ type: ADD_BOOK, payload: res.data.book });
    } catch (err) {
      dispatch({ type: BOOK_ERROR, payload: err.response.msg });
    }
  };

  const deleteBook = async id => {
    try {
      await axios.delete(`http://localhost:3000/api/books/${id}`);
      dispatch({ type: DELETE_BOOK, payload: id });
    } catch (err) {
      dispatch({ type: BOOK_ERROR, payload: err.response.msg });
    }
  };

  const updateBook = async book => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.put(
        `http://localhost:3000/api/books/${book.id}`,
        book,
        config
      );
      dispatch({ type: UPDATE_BOOK, payload: res.data });
      fetchBooks();
    } catch (err) {
      dispatch({ type: BOOK_ERROR, payload: err.response.msg });
    }
  };

  const clearBooks = () => {
    dispatch({ type: CLEAR_BOOKS });
  };

  const setCurrent = book => {
    dispatch({ type: SET_CURRENT, payload: book });
  };

  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  const filterBooks = text => {
    dispatch({ type: FILTER_BOOKS, payload: text });
  };

  const clearFiltered = () => {
    dispatch({ type: CLEAR_FILTERED });
  };

  return (
    <BookContext.Provider
      value={{
        books: state.books,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        fetchBooks,
        addBook,
        deleteBook,
        setCurrent,
        clearCurrent,
        updateBook,
        filterBooks,
        clearFiltered,
        clearBooks
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

export default BookState;
