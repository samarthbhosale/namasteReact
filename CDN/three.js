const head1 = React.createElement("div",
                {id : "div1",name : "div1"},
                [
                    React.createElement("h1", {id : "h1",name : "h1"},"This is my first element"),
                    React.createElement("h3", {id : "h3",name : "h3"},"This is my second element"),
                    React.createElement("h5", {id : "h5",name : "h5"},"This is my third element"),
                ]
            );
const rootelement = document.getElementById("root");
const root = ReactDOM.createRoot(rootelement);

root.render(head1);
