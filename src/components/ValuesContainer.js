import { connect } from 'react-redux';
import Values from './Values';
import getTotalExpenses from '../redux/expenses/expensesSelector';

const mapStateToProps = state => ({
  budget: state.budget,
  expenses: getTotalExpenses(state),
  balance: state.budget - getTotalExpenses(state),
});

export default connect(mapStateToProps)(Values);
