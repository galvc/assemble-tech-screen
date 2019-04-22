import React, { Component } from 'react';
import Product from './Product';
import {
    NavLink,
    HashRouter
} from 'react-router-dom';


class Cart extends Component {
    render() {
        const cart = this.props.loadCart;
        return(
            <div>
                <table>
                    {cart.map((item, key) => {
                        return ( <Product item={item} key={key} /> )
                    })}
                </table>

                <HashRouter>
                    <NavLink to="/check-out"><button>Check Out</button></NavLink>
                </HashRouter>
            </div>
        )
    }
}

export default Cart;