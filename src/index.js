import React from "react";
import ReactDOM from "react-dom/client";

function Greeting() {
  return (
    <>
      <div>
        <h1 id="prince">Hello Prince</h1>
        <Person />
      </div>
    </>
  );
}

const Person = () => {
  return (
    <div>
      <h1>Hello !</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Greeting />
  </>
);
