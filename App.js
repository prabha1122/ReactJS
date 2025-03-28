// nested elements

// {
//   /* <div id = "parent">
//     <div id = "child">
//     <h1> I am h1 tag </h1>

//     </div>

// </div> */
// }

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "i am h1 tag"),
    React.createElement("h2", {}, "i am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "i am h1 tag"),
    React.createElement("h2", {}, "i am h2 tag"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "hello from React"
);

console.log(parent); // The output will be an object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
