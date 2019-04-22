import React, { Component } from 'react';
import {
    NavLink,
    HashRouter
} from 'react-router-dom';

class CheckOut extends Component {
    render() {
        return (
            <div>
                {/* // if i had time, i would connect these to the state */}
                <div className="Payment Information">
                    <h2>Payment Information</h2>
                    <label name="NameOnCard" value ="Name on Card" />
                    <input type="text" name="name" placeholder="Name on Card" />
                    <input type="text" name="cardNumber" placeholder="XXX XXXX XXXX XXXX" />
                    {/* DROPDOWN FOR EXPIRATION DATE */}
                    <select name="month" placeholder="MM">
                        <option value="01">01</option>
                    </select>
                    <select name="year" placeholder="YYYY">
                        <option value="2000">2000</option>
                    </select>
                    <input type="text" name="city" placeholder="City" />
                </div>

                <div className="Shipping Address">
                    <h2>Shipping Address</h2>
                    <input type="text" name="fullName" placeholder="Full name" />
                    <input type="text" name="address" placeholder="Address" />
                    <input type="text" name="Apt" placeholder="Apt/suite/etc" />
                    <input type="text" name="city" placeholder="City" />
                    {/* DROPDON FOR COUNTRY */}
                    <select name="country" placeholder="United States">
                        <option value="United States">United States</option>
                    </select>
                    {/* DROPDOWN FOR STATE */}
                    <select name="state" placeholder="State">
                        <option value="Washington">Washington</option>
                    </select>
                    <input type="text" name="zipCode" placeholder="ZIP Code" />
                    
                </div>
                <HashRouter>
                    <NavLink to="/order-complete"><button>PLACE ORDER</button></NavLink>
                </HashRouter>
                
            </div>
        )
    }
}

export default CheckOut;