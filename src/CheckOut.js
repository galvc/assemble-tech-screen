import React, { Component } from 'react';
import {
    NavLink,
    HashRouter
} from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

class CheckOut extends Component {
    render() {
        return (
            <div>
                {/* // if i had time, i would connect these to the state */}
                {/* i would also make the code formatted neater */}
                <div className="Payment Information">
                    <h2>Payment Information</h2>
                <Form>
                        <Form.Label>Name on Card</Form.Label>
                        <Form.Control size="sm"  type="text" placeholder="Name on Card" />
                        <Form.Label>Card Number</Form.Label>
                        <Form.Control size="sm"  type="text" name="cardNumber" placeholder="XXX XXXX XXXX XXXX" />
                        {/* DROPDOWN FOR EXPIRATION DATE */}
                        <Form.Label>Expiration Date</Form.Label>
                        <Form.Control as="select">
                            <option>MM</option>
                        </Form.Control>
                        <Form.Control as="select">
                            <option>YYYY</option>
                        </Form.Control>
                        <Form.Label>CVV</Form.Label>
                        <Form.Control size="sm"  type="text" name="city" placeholder="CVV" />
                </Form>


                </div>

                <div className="Shipping Address">
                {/* i would also add rows and grids to make the final display more organized */}
                    <h2>Shipping Address</h2>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control size="sm"  type="text" name="fullName" placeholder="Full name" />

                    <Form.Label>Address</Form.Label>
                    <Form.Control size="sm"  type="text" name="address" placeholder="Address" />
                    
                    <Form.Label>Apt/suite/etc</Form.Label>
                    <Form.Control size="sm"  type="text" name="Apt" placeholder="Apt/suite/etc" />
                   
                    <Form.Label>City</Form.Label>
                    <Form.Control size="sm"  type="text" name="city" placeholder="City" />
                    
                    <Form.Label>Country</Form.Label>
                    <Form.Control as="select">
                        <option value="United States">United States</option>
                    </Form.Control>

                    <Form.Label>State</Form.Label>
                    <Form.Control as="select">
                        <option>Washington</option>
                    </Form.Control>

                    <Form.Label>Zip Code</Form.Label>
                    <Form.Control size="sm"  type="text" name="zipCode" placeholder="ZIP Code" />
                    
                </div>
                <HashRouter>
                    <NavLink to="/order-complete">
                        <Button variant="primary" size="lg">
                            PLACE ORDER
                        </Button>
                    </NavLink>
                </HashRouter>
                
            </div>
        )
    }
}

export default CheckOut;