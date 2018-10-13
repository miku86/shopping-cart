import React, { Component } from 'react';
import './App.css';
import OrderOverview from './components/OrderOverview';
import ItemDetails from './components/ItemDetails';
import PromoCode from './components/PromoCode';

class App extends Component {
  render() {
    return (
      <div className="App">
        <OrderOverview />
        <ItemDetails />
        <PromoCode />
      </div>
    );
  }
}

export default App;
