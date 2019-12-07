import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from './shared/Form';
import Label from './shared/Label';
import Input from './shared/Input';
import Button from './shared/Button';
import * as actions from '../redux/expenses/expensesActions';
import { getBalance } from '../redux/expenses/expensesSelector';

const labelStyles = `
  margin-bottom: 16px;  
`;

class ExpenseForm extends Component {
  state = {
    name: '',
    amount: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    const { balance } = this.props;
    const { amount } = this.state;
    e.preventDefault();
    if (balance >= amount && amount > 0) {
      this.props.onSave({ ...this.state });
    }
    this.setState({ name: '', amount: '' });
  };

  render() {
    const { name, amount } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter expense name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </Label>
        <Label customStyles={labelStyles}>
          Enter expense amount
          <Input
            type="number"
            name="amount"
            value={amount}
            onChange={this.handleChange}
          />
        </Label>

        <Button label="Add" type="submit" />
      </Form>
    );
  }
}

ExpenseForm.propTypes = {
  onSave: PropTypes.func.isRequired,
  balance: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  balance: getBalance(state),
});

const mapDispatchToProps = dispatch => ({
  onSave: value => dispatch(actions.addExpense(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
