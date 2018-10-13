import React, { Component } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

class OrderOverview extends Component {
  state = {
    promoCode: this.props.promoCode,
  };

  componentDidMount = () => {
    this.setState({
      promoCode: this.props.promoCode,
    });
  };

  format = (input) => `${input.toFixed(2)} €`;

  render() {
    const data = {
      subTotal: 2000.0,
      pickupSavings: -3.95,
      taxes: 2000 * 0.2,
      promo: -200,
    };

    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Your Order</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <p>Subtotal:</p>
            <p>{this.format(data.subTotal)}</p>
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
            <p>{this.format(data.pickupSavings)}</p>
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
            <p>{this.format(data.taxes)}</p>
          </ListGroupItem>
          {this.props.promoCode === '10%' ? (
            <ListGroupItem>
              <p>Promo Code:</p>
              <p>{this.format(data.promo)}</p>
            </ListGroupItem>
          ) : (
            ''
          )}
          <ListGroupItem style={{ fontWeight: 700 }}>
            <p>Total:</p>
            <p>
              {this.format(
                data.subTotal + data.pickupSavings + data.taxes + data.promo,
              )}
            </p>
          </ListGroupItem>
        </ListGroup>
      </Card>
    );
  }
}

export default OrderOverview;
