export const actionTypes = {
  ADD_BUDGET: 'ADD_BUDGET',
};

export const addBudget = value => ({
  type: actionTypes.ADD_BUDGET,
  payload: value,
});
