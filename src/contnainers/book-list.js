import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook, hoverBook, selectDrink, hoverDrink, activeType } from "../actions/index";
import { bindActionCreators } from "redux";
class Booklist extends Component {
  renderBooks() {
    return this.props.books.map(book => {
      var klase = "list-group-item";
      if(this.props.activeType == "BOOK" && book.index == this.props.active_book.index)
      {
        klase = "list-group-item active";
      }

      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          onMouseEnter={() => this.props.hoverBook(book)}
          className={klase}
        >
          {" "}
          {book.title}
        </li>
      );
    });
  }
  renderDrinks() {
    return this.props.drinks.map(drink => {
      var klase = "list-group-item";
      if(this.props.activeType == "DRINK" && drink.index == this.props.active_drink.index)
      {
        klase = "list-group-item active";
      }

      return (
        <li
          key={drink.title}
          onClick={() => this.props.selectDrink(drink)}
          onMouseEnter={() => this.props.hoverDrink(drink)}
          className={klase}
        >
          {" "}
          {drink.title}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="liste">
        <ul className="list-group col-sm-4 lista">{this.renderBooks()}</ul>
        <ul className="list-group col-sm-4 lista">{this.renderDrinks()}</ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    //sta je to sadasdas
    books: state.books,
    drinks: state.drinks,
    active_book: state.activeBook,
    active_drink: state.activeDrink,
    activeType: state.activeType
  };
}
function mapDispatchToProps(dispatch) {
  //whenever selectedBook is called result should be passed to all reducers
  return bindActionCreators({ selectBook: selectBook, hoverBook: hoverBook, selectDrink: selectDrink, hoverDrink: hoverDrink }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Booklist);
