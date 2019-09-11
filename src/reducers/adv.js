import { ADV_FETCHED } from "../actions/action";

export default (state = null, action = {}) => {
  switch (action.type) {
    case ADV_FETCHED:
      return action.payload;
    default:
      return state;
  }
};
