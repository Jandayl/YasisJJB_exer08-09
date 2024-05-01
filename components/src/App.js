import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import NavPanel from "./NaviPanel";
import ItemsPanel from "./ItemsPanel";


function App() {
    return (
            <div className="App">
                <div className="Header">
                    <header> Lazado </header>
                    <NavPanel data={navCat} />
                </div>
                <div className ="Body">
                    <ItemsPanel data = {itemsLaz} />
                </div>
            </div>
    );
}
const navCat = [
    { name: "Appliances", url: "#", id: 1 },
    { name: "Groceries", url: "#", id: 2 },
    { name: "Gadgets", url: "#", id: 3 },
    { name: "Clothing", url: "#", id: 4 }
]; 

const itemsLaz = [
    { name: "KatKot", image: "https://www.liveabout.com/thmb/e3wT3S7UhVqyE0tCFrXAd2CVflM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/funnyknockoffbrands12-632599bcd6664535bc054327b5b561d3.jpg", id: 1},
    { name: "Goochi",  image: "https://media.distractify.com/brand-img/Z17EY6O/0x0/peppapiggucci-1534423473777-1534423475791.jpg", id: 2 },
    { name: "Air Vibes Pro II", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbZQsRUohegKz7EJfFums9bsfVQXHhO8THFAnAVWo3EQ&s", id: 3 },
    { name: "Xbox 720", image:"https://i.kym-cdn.com/photos/images/newsfeed/002/594/297/010.jpg", id: 4 }
]

export default App;