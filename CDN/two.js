const head1 = React.createElement("div",
                {id : "div1",name : "div1"},
                React.createElement("span",
                    {id : "span1",name : "span1"},
                    React.createElement("h1",
                        {id : "h11",name : "h11"},
                        "This is my Parent Child Element Program!"
                    )
                )
            );
const rootelement = document.getElementById("root");
const root = ReactDOM.createRoot(rootelement);

root.render(head1);
