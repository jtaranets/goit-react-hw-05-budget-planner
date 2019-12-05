import { actionTypes } from './budgetActions';

const budgetReducer = (store = '', { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_BUDGET:
      return payload;
    default:
      return store;
  }
};

export default budgetReducer;
