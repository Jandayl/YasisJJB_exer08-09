import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import NavPanel from "./NaviPanel";
// import AppliancesPage from "./AppliancesPage";
// import GroceriesPage from "./GroceriesPage";
// import GadgetsPage from "./GadgetsPage";
// import ClothingPage from "./ClothingPage";

function App() {
    return (
            <div className="App">
                <div className="Header">
                    <header> Lazado </header>
                    <NavPanel data={navCat} />
                </div>
            </div>
    );
}
const navCat = [
    { name: "Appliances", id: 1 },
    { name: "Groceries", id: 2 },
    { name: "Gadgets", id: 3 },
    { name: "Clothing", id: 4 }
]; 

export default App;