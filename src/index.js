import { Ownact } from "./ownact.js";
import App from "./App.jsx";

const container = document.getElementById("root");
globalThis.Ownact = Ownact;

const rerender = (value) => {
  const updateValue = (e) => rerender(e.target.value);

  const root = App({ value, updateValue });
  Ownact.render(root, container);
};

rerender("World");
