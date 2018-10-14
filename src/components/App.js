import React, { Component } from 'react';
import OrderOverview from './OrderOverview';
import ItemDetails from './ItemDetails';
import PromoCode from './PromoCode';

class App extends Component {
  state = {
    promoCode: '',
  };

  handleSubmit = (promoCode) => {
    this.setState({ promoCode });
  };

  render() {
    return (
      <div className="App">
        <OrderOverview promoCode={this.state.promoCode} />
        <ItemDetails />
        <PromoCode handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
