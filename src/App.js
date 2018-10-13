import React, { Component } from 'react';
import './App.css';
import OrderOverview from './components/OrderOverview';
import ItemDetails from './components/ItemDetails';
import PromoCode from './components/PromoCode';

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
