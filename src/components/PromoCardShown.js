import React, { Component } from 'react';
import { Card, Button, Form, FormControl } from 'react-bootstrap';

class PromoCardShown extends Component {
  state = {
    promoCode: '',
  };

  handleChange = (event) => {
    this.setState({
      promoCode: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state.promoCode);
    this.setState({
      promoCode: '',
    });
  };

  render() {
    const text = {
      title: 'Promo Code',
      desc: 'Type "10%" for 10% off',
      input: 'Your Promo Code',
      buttonHide: 'Hide Promo Code - ',
      buttonSubmit: ' Add Promo Code +',
    };

    return (
      <Card style={{ width: '18rem' }}>
        <Button variant="primary" size="sm" onClick={this.props.handleClick}>
          {text.buttonHide}
        </Button>

        <Card.Body>
          <Card>
            <Card.Body>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Form.Label> {text.title}</Form.Label>
                  <Card.Text>{text.desc}</Card.Text>{' '}
                  <FormControl
                    placeholder={text.input}
                    aria-label={text.input}
                    onChange={this.handleChange}
                    value={this.state.promoCode}
                  />{' '}
                </Form.Group>
                <Button
                  variant="warning"
                  size="sm"
                  type="submit"
                  disabled={!this.state.promoCode}
                >
                  {text.buttonSubmit}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
    );
  }
}

export default PromoCardShown;
