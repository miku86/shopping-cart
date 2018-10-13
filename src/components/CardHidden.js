import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

class CardHidden extends Component {
  render() {
    const text = {
      buttonShow: 'Show Items',
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

export default CardHidden;
