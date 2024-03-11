import React from "react";
import ReactDOM from "react-dom/client";

//React element

//const heading = React.createElement("h1", {}, "Hello React Element");
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);

//JSX
// jsx=>Babel transpiles to React.createelement =>React element=js obj=>html element(render)
//attribute to be given in camel case
const number = 100;
const Heading = () => <h1 className="head">Hello jsx 1 2 3</h1>;
//React functional Component-js object(name it with cap),inject any js code in {}
const HeadingComponent = () => {
  return (
    <div>
      <Heading />
      {number * 20}
      <h1>React Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
