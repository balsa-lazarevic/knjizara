export function selectBook(book) {
  //ovo je actioncreator tako da treba da vrati akciju: objekat sa
  console.log('selected book ' + book.title);
  return {
    type: "BOOK_SELECTED",
    payload: book
  };
}
export function hoverBook(book) {
  console.log('hovered book ' + book.title);
  return {
    type: "BOOK_HOVER",
    payload: book
  };
}

export function selectDrink(drink) {
  //ovo je actioncreator tako da treba da vrati akciju: objekat sa
  console.log('selected drink ' + drink.title);
  return {
    type: "DRINK_SELECTED",
    payload: drink
  };
}

export function hoverDrink(drink) {
  console.log('hovered drink ' + drink.title);
  return {
    type: "DRINK_HOVER",
    payload: drink
  };
}
