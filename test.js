import { handle } from "./index.js";
import assert from "assert";

let state = {};
const recursions = 1000000000;
for (let i = 0; i <= recursions; i++) {
  state = handle(state, { input: { function: "contribute" } }).state;
}


assert(state.pi, 3.1415926445762157);

