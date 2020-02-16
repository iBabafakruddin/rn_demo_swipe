import createDataContext from "./createDataContext";
import Data from "../data/Books";
const bookReducer = (state, action) => {
  switch (action.type) {
    case "books":
      return Data;
    case "current_book":
      return { ...state, CurrentBook: action.CurrentBook };
    case "remove_book":
      const remaining = state.Books.filter(
        book => book.id !== action.CurrentBook.id
      );
      return { ...state, Books: remaining };
    case "purchase_book":
      const purchasedBooks = state.purchasedBooks
        ? [...state.purchasedBooks, action.CurrentBook]
        : [action.CurrentBook];

      console.log(purchasedBooks);
      return { ...state, purchasedBooks };
    default:
      return state;
  }
};

const getData = dispatch => () => {
  dispatch({ type: "books", payload: Data });
};

const setCurrentBook = dispatch => CurrentBook => {
  dispatch({ type: "current_book", CurrentBook });
};

const removeFromList = dispatch => CurrentBook => {
  dispatch({ type: "remove_book", CurrentBook });
};

const purchaseBook = dispatch => CurrentBook => {
  dispatch({ type: "purchase_book", CurrentBook });
};

export const { Provider, Context } = createDataContext(
  bookReducer,
  { getData, setCurrentBook, removeFromList, purchaseBook },
  {}
);
