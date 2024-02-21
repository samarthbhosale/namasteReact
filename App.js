import React from "react";
import ReactDOM from "react-dom";

// React Element
const heading = React.createElement("h1", {id: "heading"},"React Foundation SaM");

// JSX
const jsxHeading = <h1 id="jsxheading">React JSX Foundation SaM</h1>; //Single line
const jsxHead = (<h1 id="jsxheading1">
    React JSX Foundation SaM Multiline
    </h1>); //Multiple line

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(jsxHead);
