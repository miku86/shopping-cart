import React, { Component } from 'react';
import CardShown from './CardShown';
import CardHidden from './CardHidden';

class ItemDetails extends Component {
  state = {
    itemsAreShown: false,
  };

  handleClick = () => {
    this.setState({
      itemsAreShown: !this.state.itemsAreShown,
    });
  };

  render() {
    return this.state.itemsAreShown ? (
      <CardShown handleClick={this.handleClick} />
    ) : (
      <CardHidden handleClick={this.handleClick} />
    );
  }
}

export default ItemDetails;
