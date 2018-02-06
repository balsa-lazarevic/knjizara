import { combineReducers } from "redux";
import BooksReducer from "./reducer_books";
import ActiveBook from "./reducer_active_book";
import HoverBook from "./reducer_hover_book";
import DrinksReducer from "./reducer_drinks";
import ActiveDrink from "./reducer_active_drink";
import ActiveType from "./reducer_active_item_type";
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook,
  hoverBook: HoverBook,
  drinks: DrinksReducer,
  activeDrink: ActiveDrink,
  activeType: ActiveType
});

export default rootReducer;
