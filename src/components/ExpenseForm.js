import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from './shared/Form';
import Label from './shared/Label';
import Input from './shared/Input';
import Button from './shared/Button';
import * as actions from '../redux/expenses/expensesActions';

const labelStyles = `
  margin-bottom: 16px;  
`;

class ExpenseForm extends Component {
  state = {
    name: '',
    amount: 0,
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSave({ ...this.state });
    this.setState({ name: '', amount: 0 });
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
};

const mapDispatchToProps = dispatch => ({
  onSave: value => dispatch(actions.addExpense(value)),
});

export default connect(null, mapDispatchToProps)(ExpenseForm);
