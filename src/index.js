//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

var React = require("react");
var ReactDOM = require("react-dom");

ReactDOM.render(
  <div>
    <h1>A Good Life</h1>
    <ul>
      <li>cash checks</li>
      <li>write stuff that is read</li>
      <li>healthy happy kiddos</li>
    </ul>
  </div>,
  document.getElementById("root")
);
