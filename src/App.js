import React, { Component } from 'react';
import './App.css';
import OrderOverview from './components/OrderOverview';
import ItemDetails from './components/ItemDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <OrderOverview />
        <ItemDetails />
      </div>
    );
  }
}

export default App;
