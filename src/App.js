import React, { Component } from 'react';
import './App.css';
import OrderOverview from './components/OrderOverview';

class App extends Component {
  render() {
    return (
      <div className="App">
        <OrderOverview />
      </div>
    );
  }
}

export default App;
