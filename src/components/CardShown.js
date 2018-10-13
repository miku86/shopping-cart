import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

class CardShown extends Component {
  render() {
    const text = {
      buttonHide: 'Hide Items',
    };

    const items = [
      {
        title: '15-inch MacBook Pro',
        description:
          'Apple MacBook Pro 15.4, Core i9-8950HK, 32GB RAM, 4TB SSD, Radeon Pro 560X',
      },
      {
        title: 'Apple iPhone XS Max 512GB gold',
        description:
          '6.5 inches, 1242 x 2688 pixels, Apple A12 Bionic Hexa-core, 512 GB Internal Storage, 4 GB RAM',
      },
    ];

    return (
      <Card style={{ width: '18rem' }}>
        <Button variant="primary" size="sm" onClick={this.props.handleClick}>
          {text.buttonHide}
        </Button>
        {items.map((item) => {
          return (
            <Card.Body>
              <Card>
                <Card.Body>
                  <Card.Subtitle className="mb-2 text-muted">
                    {item.title}
                  </Card.Subtitle>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
              </Card>
            </Card.Body>
          );
        })}
      </Card>
    );
  }
}

export default CardShown;
