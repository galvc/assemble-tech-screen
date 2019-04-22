import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';


class Product extends Component {

    formatPrice(quantity, unit) {
        return (quantity * unit).toLocaleString("en-US", { style: "currency", currency: "USD" })
    };

    render() {
        const item = this.props.item;
        console.log('product' + item.name);
        return(
            <Row>
                <Col sm>{item.name} and {item.sku}</Col>
                <Col sm>{item.quantity}</Col>
                <Col sm>{this.formatPrice(item.quantity, item.unitPrice)}</Col>
                {/*  THIS NEEDS TO BE MULTIPLIED WITH QUANTITY */}
            </Row>
        )
    }
}

export default Product;