import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import expensesReducer from './expenses/expensesReducer';
import budgetReducer from './budget/budgetReducer';
import storeValidation from './middlewares/validateStore';

const rootReducer = combineReducers({
  expenses: expensesReducer,
  budget: budgetReducer,
});

const middlewares = [storeValidation];

const enhancer = applyMiddleware(...middlewares);
const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;
