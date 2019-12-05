export const actionsTypes = {
  ADD_EXPENSE: 'ADD_EXPENSE',
  REMOVE_EXPENSE: 'REMOVE_EXPENSE',
};

export const addExpense = value => ({
  type: actionsTypes.ADD_EXPENSE,
  payload: value,
});

export const removeExpense = id => ({
  type: actionsTypes.REMOVE_EXPENSE,
  payload: id,
});
