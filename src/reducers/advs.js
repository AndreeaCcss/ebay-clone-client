import { ALL_ADVS, CREATE_ADV, ADV_DELETE_SUCCESS } from "../actions/action";

export default (state = [], action = {}) => {
  switch (action.type) {
    case ALL_ADVS:
      return action.payload;
    case CREATE_ADV:
      return [action.payload, ...state];
    case ADV_DELETE_SUCCESS:
      return [...state.filter(adv => adv.id !== action.advId)];
    default:
      return state;
  }
};
