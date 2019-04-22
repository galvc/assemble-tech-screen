import React, { Component } from 'react';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';
import sampleCart from './sample-cart'; 
//I put this in a diff file so the data loaded wont distrct from the loading of components
//I would put the sample file in a separate folder but it will stay here for testing purposes
import Cart from './Cart';
import CheckOut from './CheckOut';
import OrderComplete from './OrderComplete';


class App extends Component {
  state = {
    cart: sampleCart
  } 

  render() {
    return (
      <div className="App">
        <h1>Assemble Store</h1> 
        {/* title needs to change for every spa change */}

        {/* <Cart loadCart={this.state.cart} /> */}
          <HashRouter>

            <div className="content">
              {/* currently trying to figure out routing while making sure Button path changes for every component */}
              <Route
                exact path="/"
                render={(props) => <Cart {...props} loadCart={this.state.cart} />} />
                {/* hoping this route will show up with the right props */}
              <Route 
                path="/check-out" 
                render={(props) => <CheckOut {...props} />} />
              <Route
                path="/order-complete"
                component={OrderComplete} />
              
            </div>
          

            {/* this Button needs to change as we change screens */}
          </HashRouter>

      </div>
    );
  }
}

export default App;
