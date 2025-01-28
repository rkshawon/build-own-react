import { Ownact } from "./ownact.js";
import App from "./App.jsx";

const container = document.getElementById("root");
globalThis.Ownact = Ownact;

const root = App();

Ownact.render(root, container);
