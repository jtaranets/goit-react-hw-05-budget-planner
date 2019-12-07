export const getTotalExpenses = state => {
  return state.expenses.reduce(
    (total, expense) => (total += parseInt(expense.amount, 10)),
    0,
  );
};

export const getBalance = state => state.budget - getTotalExpenses(state);
