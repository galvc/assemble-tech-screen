import React from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from 'react-router-dom';
import { Button } from 'react-bootstrap';


const OrderComplete = (props) => {
    return(
        <div>
            Hooray! Way to order those products.
            <p />
            <HashRouter>
                <NavLink to="/"><Button variant="primary">Go Home</Button></NavLink>
            </HashRouter>
            
        </div>
    )
}

export default OrderComplete;