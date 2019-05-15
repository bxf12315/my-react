import React from "react";
import ReactDOM from "react-dom";
import Clock from "./components/Clock.js";

ReactDOM.render(
  <h1>Hello World Demo22222222</h1>,
    document.getElementById('container')
);

const element = <h1>Hello, example!</h1>;
ReactDOM.render(
    element,
    document.getElementById('example')
);

   
  function tick() {
    ReactDOM.render(
      <Clock date={new Date()} />,
      document.getElementById('date')
    );
  }
   
  setInterval(tick, 1000);