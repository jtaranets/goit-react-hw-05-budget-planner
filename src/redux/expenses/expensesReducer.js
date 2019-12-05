import shortid from 'shortid';
import { actionsTypes } from './expensesActions';

const expensesReducer = (store = [], { type, payload }) => {
  switch (type) {
    case actionsTypes.ADD_EXPENSE:
      return [...store, { id: shortid.generate(), ...payload }];
    case actionsTypes.REMOVE_EXPENSE:
      return store.filter(i => i.id !== payload);
    default:
      return store;
  }
};
export default expensesReducer;
