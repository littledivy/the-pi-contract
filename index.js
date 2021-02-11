// Smart contract to lazy evaluate pi using Gregory-Leibniz series algorithm.
// pi = 4 * ((1/1 - 1/3) + (1/5 - 1/7) + (1/9 - 1/11) + ...)
// https://stackoverflow.com/questions/39574989/calculating-pi-in-javascript-using-gregory-leibniz-series
// Over 1 billion iterations will get it to 3.1415926445762157

export function handle(state, action) {
  state.v = state.v || 0;
  state.i = state.i || 1;
  
  if(action.input.function == "contribute") {
    state.v += 1 / state.i - 1 / (state.i + 2);
    state.i += 4;
    state.pi = 4 * state.v;
  }
  
  return { state }
}


