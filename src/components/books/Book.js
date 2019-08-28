import React, { useContext } from "react";
import BookContext from "../../context/bookcontext/bookContext";

const Book = ({ book }) => {
  const bookContext = useContext(BookContext);

  const onDelete = () => {
    bookContext.deleteBook(book.id);
    bookContext.clearCurrent();
  };

  return (
    <div className="book">
      <h3 className="item">{book.title}</h3>
      <p className="item">{book.author}</p>
      <p className="item">{book.review}</p>
      <p className="item">{book.publicationYear}</p>
      <p className="item-link">
        <a href="#">
          <i
            className="far fas fa-pen fas fa-trash"
            id={book.id}
            onClick={onDelete}
          />
        </a>
        <a href="#book">
          <i
            className="fat fas fa-pen"
            id={book.id}
            onClick={() => bookContext.setCurrent(book)}
          />
        </a>
      </p>
    </div>
  );
};

export default Book;
