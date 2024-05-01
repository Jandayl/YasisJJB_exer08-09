import { useState } from "react";

export function ShoppingCart() {
    const [cartItems, setCartItems] = useState([]);
    const [itemCount, setItemCount] = useState({});

    function addItems(item) {
        if (cartItems.includes(item)) {
            setItemCount(prevCount => ({
                ...prevCount,
                [item.id]: (prevCount[item.id] || 0) + 1
            }));
        } else {
            setCartItems(prevItems => [...prevItems, item]);
            setItemCount(prevCount => ({
                ...prevCount,
                [item.id]: 1
            }));
        }
        console.log(`Added ${item.name} to cart!`);
    }

    function deleteItem(item) {
        setCartItems((prevItems) => {
            const delItem = [...prevItems];
            delItem.splice(item, 1);
            return delItem;
        });
    }

    return { cartItems, addItems, deleteItem, itemCount };
}
