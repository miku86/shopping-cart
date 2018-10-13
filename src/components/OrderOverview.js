import React, { Component } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

class OrderOverview extends Component {
  render() {
    const data = {
      subTotal: 100.0,
      pickupSavings: -3.95,
      taxes: 5.0,
    };

    const format = (input) => `${input.toFixed(2)} €`;

    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Your Order</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <p>Subtotal:</p>
            <p>{format(data.subTotal)}</p>
          </ListGroupItem>
          <ListGroupItem>
            <p
              title="If you pickup your order at a nearby store, you save delivery costs"
              style={{
                textDecoration: 'underline #666 dashed',
              }}
            >
              Pickup Savings:
            </p>
            <p>{format(data.pickupSavings)}</p>
          </ListGroupItem>
          <ListGroupItem>
            <p
              title="The taxes you have to pay to the government"
              style={{
                textDecoration: 'underline #666 dashed',
              }}
            >
              Taxes:{' '}
            </p>
            <p>{format(data.taxes)}</p>
          </ListGroupItem>
          <ListGroupItem style={{ fontWeight: 700 }}>
            <p>Total:</p>
            <p>{format(data.subTotal + data.pickupSavings + data.taxes)}</p>
          </ListGroupItem>
        </ListGroup>
      </Card>
    );
  }
}

export default OrderOverview;
