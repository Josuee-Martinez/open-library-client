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

export default (state, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        books: action.payload,
        loading: false
      };
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
        loading: false
      };
    case DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter(book => book.id !== action.payload),
        loading: false
      };
    case CLEAR_BOOKS:
      return {
        ...state,
        books: [],
        filtered: null,
        error: null,
        current: null
      };
    case UPDATE_BOOK:
      return {
        ...state,
        books: state.books.map(book =>
          book.id === action.payload.id ? action.payload : book
        ),
        loading: false
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case FILTER_BOOKS:
      return {
        ...state,
        filtered: state.books.filter(book => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return book.title.match(regex) || book.author.match(regex);
        })
      };
    case CLEAR_FILTERED:
      return {
        ...state,
        filtered: null
      };
    case BOOK_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
