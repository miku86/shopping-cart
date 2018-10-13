import React, { Component } from 'react';
import { Card, Button, InputGroup, FormControl } from 'react-bootstrap';

class PromoCardShown extends Component {
  render() {
    const text = {
      title: 'Promo Code',
      input: 'Your Promo Code',
      buttonHide: 'Hide Promo Code',
      buttonSubmit: ' Add Promo Code',
    };

    return (
      <Card style={{ width: '18rem' }}>
        <Button variant="primary" size="sm" onClick={this.props.handleClick}>
          {text.buttonHide}
        </Button>
        <Card.Body>
          <Card>
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">
                {text.title}
              </Card.Subtitle>
              <InputGroup className="mb-3">
                <FormControl placeholder={text.input} aria-label={text.input} />
              </InputGroup>
              <Button variant="warning" size="sm">
                {text.buttonSubmit}
              </Button>
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
    );
  }
}

export default PromoCardShown;
