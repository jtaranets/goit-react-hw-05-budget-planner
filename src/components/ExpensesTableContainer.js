import { connect } from 'react-redux';
import * as actions from '../redux/expenses/expensesActions';
import ExpensesTable from './ExpensesTable';

const mapStateToProps = state => ({
  items: state.expenses,
});

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(actions.removeExpense(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
