import React from "react";
import ReactDOM from "react-dom";

// React Element
const heading = React.createElement("h1", {id: "heading"},"React Foundation SaM");

// JSX
const jsxHeading = <h1 id="jsxheading">React JSX Foundation SaM</h1>; //Single line
const jsxHead = (<h1 id="jsxheading1">
    React JSX Foundation SaM Multiline
    </h1>); //Multiple line

// Arrow function = Functional component with body
const myFun = () => {
    return <h1>this is arrow function of functional component</h1>
};

// Arrow function without body - direct return = Functional component
const myFun1 = () => <h1>this is arrow function of functional component with direct return</h1>;


const MyFun3 = () => <h1>COMPONENT COMPOSITION</h1>;
const MyFun4 = () => <h2>JAVASCRIPT IN JSX</h2>;
const myNum = 404;

// Arrow function without body - direct return - multiline = Functional component
const MyFun2 = () => (
    <div>
        {/* COMPONENT INSIDE COMPONENT - COMPONENT COMPOSITION */}
        <MyFun3 />
        {/* JAVASCRIPT INSIDE JSX */}
        {MyFun4}
        {MyFun4()}
        <MyFun4></MyFun4>
        
        <h3>{myNum}</h3>
        <h1>this is arrow function of functional component with direct return</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// root.render(jsxHead);

// Rendering Functional Component
root.render(<MyFun2 />);
