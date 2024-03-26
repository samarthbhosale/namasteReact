import React from "react";
import ReactDOM from "react-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const styleCard = () => {
    backgroundColor: "#f0f0f0";
};

const RestaurantCard = (props) => {
    return (
        // <div className="restaurant-card" style={{styleCard}}>
        <div className="restaurant-card">
            <img className="rest-card-image" src="https://5.imimg.com/data5/SELLER/Default/2023/3/EZ/GC/RA/31233852/portable-fast-food-stall-1000x1000.jpg" alt="./images/Swiggy_logo.png"></img>
            <h3>{props.resName}</h3>
            <h4>{props.cuisin}</h4>
            <h4>4.5 Stars</h4>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="Search">
                <input type="text"></input>
                    <button>Search</button>
                </div>
            <div className="restaurant-container">
                <RestaurantCard
                resName="Hotel Real Taste"
                cuisin="Chinease,Nort Indian"/>
                <RestaurantCard
                resName="Madinah"
                cuisin="Hyderabadi,Nort Indian"/>
            </div>
        </div>
    );
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header></Header>
            <Body></Body>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);