import React, { Component } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

class OrderOverview extends Component {
  render() {
    const data = {
      subTotal: 100.0,
      pickupSavings: -3.95,
      mailingFees: 5.0,
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
            <p>Pickup Savings:</p>
            <p>{format(data.pickupSavings)}</p>
          </ListGroupItem>
          <ListGroupItem>
            <p>Mailing Fees: </p>
            <p>{format(data.mailingFees)}</p>
          </ListGroupItem>
          <ListGroupItem style={{ fontWeight: 700 }}>
            <p>Total:</p>
            <p>
              {format(data.subTotal + data.pickupSavings + data.mailingFees)}
            </p>
          </ListGroupItem>
        </ListGroup>
      </Card>
    );
  }
}

export default OrderOverview;
