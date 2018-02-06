import React, { Component } from "react";
import Booklist from "../contnainers/book-list.js";
import ItemDetail from "../contnainers/item-detail";
export default class App extends Component {
  render() {
    return (
      <div>
        <Booklist />
        <ItemDetail />
      </div>
    );
  }
}
