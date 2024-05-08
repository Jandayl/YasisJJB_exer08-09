import { useState } from "react";

export function ShoppingCart() {
    const [cartItems, setCartItems] = useState([]);
    const [itemCount, setItemCount] = useState({});
    const [totalItems, setTotalItems] = useState(0);

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
        setTotalItems(prevTotalItems => prevTotalItems + 1);
        console.log(`Added ${item.name} to cart!`);
    }

    function deleteItem(item) {
        setCartItems(prevItems => {
            const updatedItems = prevItems.filter(cartItem => cartItem.id !== item.id);
            const updatedCount = { ...itemCount };
            if (updatedCount[item.id] > 1) {
                updatedCount[item.id]--;
            } else {
                delete updatedCount[item.id];
            }
            setItemCount(updatedCount);
            return updatedItems;
        });
        setTotalItems(prevTotalItems => prevTotalItems - (itemCount[item.id] || 1));
    }

    return { cartItems, addItems, deleteItem, itemCount, totalItems };
}