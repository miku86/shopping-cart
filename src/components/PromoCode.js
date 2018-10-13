import React, { Component } from 'react';
import { Card, Button, InputGroup, FormControl } from 'react-bootstrap';

class PromoCode extends Component {
  state = {
    promoCodeIsShown: false,
  };

  handleClick = () => {
    this.setState({
      promoCodeIsShown: !this.state.promoCodeIsShown,
    });
  };

  render() {
    const text = {
      title: 'Promo Code',
      input: 'Your Promo Code',
      buttonShow: 'Show Promo Code',
      buttonHide: 'Hide Promo Code',
      buttonSubmit: ' Add Promo Code',
    };

    if (this.state.promoCodeIsShown) {
      return (
        <Card style={{ width: '18rem' }}>
          <Button variant="dark" onClick={this.handleClick}>
            {text.buttonHide}
          </Button>
          <Card.Body>
            <Card>
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                  {text.title}
                </Card.Subtitle>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder={text.input}
                    aria-label={text.input}
                  />
                </InputGroup>
                <Button variant="primary" size="sm">
                  {text.buttonSubmit}
                </Button>
              </Card.Body>
            </Card>
          </Card.Body>
        </Card>
      );
    } else {
      return (
        <Card style={{ width: '18rem' }}>
          <Button variant="dark" onClick={this.handleClick}>
            {text.buttonShow}
          </Button>
        </Card>
      );
    }
  }
}

export default PromoCode;
