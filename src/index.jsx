import { Ownact } from "./ownact.js";

/** @jsx Ownact.createElement */
const element = (
  <div>
    <h1>Hello World</h1>
    <h2>from Didact</h2>
  </div>
);

const container = document.getElementById("root");
Ownact.render(element, container);
