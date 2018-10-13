import React, { Component } from 'react';
import PromoCardHidden from './PromoCardHidden';
import PromoCardShown from './PromoCardShown';

class PromoCode extends Component {
  state = {
    promoCodeIsShown: false,
    promoCode: '',
  };

  handleClick = () => {
    this.setState({
      promoCodeIsShown: !this.state.promoCodeIsShown,
    });
  };

  render() {
    return this.state.promoCodeIsShown ? (
      <PromoCardShown
        handleClick={this.handleClick}
        handleSubmit={this.props.handleSubmit}
      />
    ) : (
      <PromoCardHidden handleClick={this.handleClick} />
    );
  }
}

export default PromoCode;
