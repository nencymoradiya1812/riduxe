import { DEC, INC } from "./Actiontype";

let initialState = 10;
export const reduser = (state = initialState, action) => {
  switch (action.type) {
    case INC:
      return state + 1;
      break;
      case DEC:
      return state  -1;
      break
      default:
      return state;
      break;
  }
};
