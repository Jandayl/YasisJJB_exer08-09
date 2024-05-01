import React from "react";
import './App.css';

function ItemsPanel(props) {
    function addItems(item) {
        console.log(`Added ${item.name} to cart!`);
    }

    return (
        <div className="contain"> 
            {
                props.data.map((item) => (
                    <div key={item.id}>
                        <div className="Items"> 
                        <p>{item.name}</p>
                        { item.image && <img className= "img" src={item.image} alt={item.name} />}
                        <button className="buttons" onClick={() => addItems(item)}>Add to Cart</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default ItemsPanel;