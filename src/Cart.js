import React, { Component } from 'react';
import Product from './Product';
import {
    NavLink,
    HashRouter
} from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';


class Cart extends Component {
    render() {
        const cart = this.props.loadCart;
        return(
            <div>
            <Container>
            <Row>
                <Col><h3>Your Cart</h3></Col>
                <Col>Quantity</Col>
                <Col>Price</Col>
            </Row>
            {/* I am missing the product images, i would import them if i had time */}
                    {cart.map((item, key) => {
                        return ( <Product item={item} key={key} /> )
                    })}
            </Container>

                <HashRouter>
                    <NavLink to="/check-out"><Button>Check Out</Button></NavLink>
                </HashRouter>
            </div>
        )
    }
}

export default Cart;