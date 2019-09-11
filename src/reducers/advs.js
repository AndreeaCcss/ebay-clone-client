import { ALL_ADVS } from "../actions/action";

export default (state = [], action = {}) => {
  switch (action.type) {
    case ALL_ADVS:
      return action.payload;
    default:
      return state;
  }
};
