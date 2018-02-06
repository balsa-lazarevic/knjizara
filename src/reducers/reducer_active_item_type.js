export default function(state = null, action) {
  switch (action.type) {
    case "BOOK_SELECTED":
      return "BOOK";
    case "DRINK_SELECTED":
      return "DRINK";
  }

  return state;
}
