import { connect } from 'react-redux';
import Values from './Values';
import {
  getTotalExpenses,
  getBalance,
} from '../redux/expenses/expensesSelector';

const mapStateToProps = state => ({
  budget: parseInt(state.budget, 10) || 0,
  expenses: getTotalExpenses(state),
  balance: getBalance(state),
});

export default connect(mapStateToProps)(Values);
