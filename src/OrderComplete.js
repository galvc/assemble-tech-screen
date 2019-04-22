import React from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from 'react-router-dom';
import App from './App';

const OrderComplete = (props) => {
    return(
        <div>
            Hooray! Way to order those products.
            <HashRouter>
                <NavLink to="/"><button>Go Home</button></NavLink>
            </HashRouter>
            
        </div>
    )
}

export default OrderComplete;