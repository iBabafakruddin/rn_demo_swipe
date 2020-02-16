import createDataContext from "./createDataContext";
import Data from "../data/Books";
const bookReducer = (state, action) => {
  switch (action.type) {
    case "books":
      return Data;
    case "current_book":
      return { ...state, CurrentBook: action.CurrentBook };
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

export const { Provider, Context } = createDataContext(
  bookReducer,
  { getData, setCurrentBook },
  {}
);
