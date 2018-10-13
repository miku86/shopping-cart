import React, { Component } from 'react';
import { Card, Button, InputGroup, FormControl } from 'react-bootstrap';

class PromoCode extends Component {
  render() {
    const item = {
      title: 'Promo Code',
      description:
        'Apple MacBook Pro 15.4, Core i9-8950HK, 32GB RAM, 4TB SSD, Radeon Pro 560X',
    };

    return (
      <Card style={{ width: '18rem' }}>
        <Button variant="dark">Show Promo Code</Button>
        <Card.Body>
          <Card>
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">
                {item.title}
              </Card.Subtitle>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Your Promo Code"
                  aria-label="Your Promo Code"
                />
              </InputGroup>
              <Button variant="primary" size="sm">
                Add Promo Code
              </Button>
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
    );
  }
}

export default PromoCode;
