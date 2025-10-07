// const heading = React.createElement("h2", { id: 'heading' }, "This is a React element created using React.createElement");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


const parent = React.createElement("div", {},
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "This is h1 tag"),
        React.createElement("h2", {}, "This is h2 tag"),
        React.createElement("h3", {}, "This is h3 tag")]
    )
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

