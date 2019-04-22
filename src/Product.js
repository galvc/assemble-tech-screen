import React, { Component } from 'react';

class Product extends Component {

    formatPrice(quantity, unit) {
        return (quantity * unit).toLocaleString("en-US", { style: "currency", currency: "USD" })
    };

    render() {
        const item = this.props.item;
        console.log('product' + item.name);
        return(
            <tr>
                <td>{item.name} and {item.sku}</td>
                <td>{item.quantity}</td>
                <td>{this.formatPrice(item.quantity, item.unitPrice)}</td>
                {/*  THIS NEEDS TO BE MULTIPLIED WITH QUANTITY */}
            </tr>
        )
    }
}

export default Product;