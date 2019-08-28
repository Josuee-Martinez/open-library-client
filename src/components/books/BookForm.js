import React, { useState, useContext, useEffect } from "react";
import BookContext from "../../context/bookcontext/bookContext";

const BookForm = () => {
  const bookContext = useContext(BookContext);

  const { current } = bookContext;

  useEffect(() => {
    if (current !== null) {
      setBook(current);
    } else {
      setBook({
        title: "",
        author: "",
        review: "",
        publicationYear: ""
      });
    }
  }, [bookContext, current]);

  const [book, setBook] = useState({
    title: "",
    author: "",
    review: "",
    publicationYear: ""
  });

  const onChange = e => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      bookContext.addBook(book);
    } else {
      bookContext.updateBook(book);
    }
    clearAll();
  };

  const clearAll = () => {
    bookContext.clearCurrent();
  };

  return (
    <form id="book" className="book-form" onSubmit={onSubmit}>
      <h2>
        {current ? "Update Book " : "Add Book "}
        <i className="fas fa-book-open" />
      </h2>
      <input
        type="text"
        name="title"
        className="input-book"
        placeholder="title"
        value={book.title}
        onChange={onChange}
      />
      <br />
      <input
        type="text"
        name="author"
        className="input-book"
        placeholder="author"
        value={book.author}
        onChange={onChange}
      />
      <br />

      <input
        type="text"
        name="review"
        className="input-book"
        placeholder="review"
        value={book.review}
        onChange={onChange}
      />
      <br />

      <input
        type="text"
        name="publicationYear"
        className="input-book"
        placeholder="publication year"
        value={book.publicationYear}
        onChange={onChange}
      />
      <br />
      {current && (
        <div className="clear-btn">
          <a href="#">
            <i className="fac fas fa-backspace" onClick={clearAll} />
          </a>
        </div>
      )}
      <button type="submit" className="button-book">
        {current ? "Update Book" : "Add Book "}
      </button>
    </form>
  );
};

export default BookForm;
