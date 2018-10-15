import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

class PromoCardHidden extends Component {
  render() {
    const text = {
      buttonShow: 'Show Promo Code +',
    };

    return (
      <Card style={{ width: '18rem' }}>
        <Button variant="primary" size="sm" onClick={this.props.handleClick}>
          {text.buttonShow}
        </Button>
      </Card>
    );
  }
}

export default PromoCardHidden;
