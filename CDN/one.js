const head1 = React.createElement("h1",
                {id : "heading1",name : "heading1"},
                "This is my first React Code!"
            );
const rootelement = document.getElementById("root");
const root = ReactDOM.createRoot(rootelement);

root.render(head1);
