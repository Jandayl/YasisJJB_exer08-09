import React from 'react';
import './App.css';
import { ShoppingCart } from "./ShoppingCart";

function ItemsPanel(props) {
    const { cartItems, addItems, deleteItem, itemCount } = ShoppingCart();


    return (
        <div className="contain"> 
            {
                props.data.map((item) => (
                    <div key={item.id}>
                        <div className="Items"> 
                            <p>{item.name}</p>
                            {item.image && <img className="img" src={item.image} alt={item.name} />}
                            <button className="buttons" onClick={() => addItems(item)}>Add to Cart</button>
                        </div>
                    </div>
                ))
            }
            <div className="cart">
                <h3> Shopping Cart (Total: {Object.values(itemCount).reduce((acc, curr) => acc + (curr || 0), 0)}) </h3>
                <ul className="cart">
                    {cartItems.map((cartItem, item) => (
                        <li key={cartItem.id} className="cartItems">{cartItem.name}      QTY: {itemCount[cartItem.id]}
                        <button className="buttons" onClick={() => deleteItem(item)}> 
                        <img className="deletebutton" src= "https://pngfre.com/wp-content/uploads/X-25.png" alt="X"/>
                        </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ItemsPanel;