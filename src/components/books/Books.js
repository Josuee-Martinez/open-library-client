import React, { useContext, Fragment, useEffect } from "react";
import BookContext from "../../context/bookcontext/bookContext";

import Book from "./Book";

const Books = () => {
  const bookContext = useContext(BookContext);

  const { books, filtered, fetchBooks } = bookContext;

  useEffect(() => {
    fetchBooks();
    //eslint-disable-next-line
  }, []);

  if (books.length === 0) {
    return "";
  }

  return (
    <div className="book-grid">
      {filtered !== null
        ? filtered.map(book => <Book book={book} key={book.id} />)
        : books.map(book => <Book book={book} key={book.id} />)}
    </div>
  );
};

export default Books;
