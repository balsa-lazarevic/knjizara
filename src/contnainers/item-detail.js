import React, { Component } from "react";
import { connect } from "react-redux";

class BookDetail extends Component {
  render() {
    if(!this.props.activeType){
      return <div className="selected"> Select item to get started</div>;
    }
    else if(this.props.activeType == "BOOK")
    {
      return (
        <div className="selected">
          <h3> Book: </h3>
          <div>Title: {this.props.book.title}</div>
          <div>Pages: {this.props.book.pages}</div>
        </div>
      );
    }
    else if(this.props.activeType == "DRINK")
    {
      return (
        <div className="selected">
          <h3> Drink: </h3>
          <div>Title: {this.props.drink.title}</div>
          <div>Liters: {this.props.drink.litara}</div>
        </div>
      );
    }
  }
}
function mapStateToProps(state) {
  return {
    book: state.activeBook,
    drink: state.activeDrink,
    activeType: state.activeType
  };
}
export default connect(mapStateToProps)(BookDetail);
