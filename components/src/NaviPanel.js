import React, { useState } from "react";
import './App.css';

function NavPanel(props) {
    const [selectedItem, setSelectedItem] = useState(null); // State to track the selected item

    const handleItemClick = (item) => {
        setSelectedItem(item); // Update selected item state when an item is clicked
    };

    return (
        <div className="contain"> 
            {
                props.data.map((item) => (
                    <button
                        key={item.id}
                        className={`Types ${selectedItem === item ? 'selected' : ''}`} // Apply selected class if item is selected
                        onClick={() => handleItemClick(item)}
                    >
                        
                        {item.name}
                    </button>
                ))
            }
        </div>
    );
}

export default NavPanel;