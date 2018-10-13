import React, { Component } from 'react';
import ItemCardShown from './ItemCardShown';
import ItemCardHidden from './ItemCardHidden';

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
      <ItemCardShown handleClick={this.handleClick} />
    ) : (
      <ItemCardHidden handleClick={this.handleClick} />
    );
  }
}

export default ItemDetails;
