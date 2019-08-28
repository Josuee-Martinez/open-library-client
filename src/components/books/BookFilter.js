import React, { useContext, useRef, useEffect } from "react";
import BookContext from "../../context/bookcontext/bookContext";

const BookFilter = () => {
  const bookContext = useContext(BookContext);
  const text = useRef("");

  useEffect(() => {
    if (bookContext.filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = e => {
    if (text.current.value !== "") {
      bookContext.filterBooks(e.target.value);
    } else {
      bookContext.clearFiltered();
    }
  };

  return (
    <form className="filter-form">
      <input
        type="text"
        ref={text}
        placeholder="filter books"
        onChange={onChange}
      />
    </form>
  );
};

export default BookFilter;
