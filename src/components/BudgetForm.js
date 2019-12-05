import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from './shared/Form';
import Label from './shared/Label';
import Input from './shared/Input';
import Button from './shared/Button';
import * as actions from '../redux/budget/budgetActions';

const labelStyles = `
  margin-bottom: 16px;  
`;

class BudgetForm extends Component {
  state = {
    budget: 0,
  };

  handleChange = e => {
    this.setState({
      budget: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSave(this.state.budget);
    this.setState({ budget: 0 });
  };

  render() {
    const { budget } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter your total budget
          <Input type="number" value={budget} onChange={this.handleChange} />
        </Label>

        <Button label="Save" type="submit" />
      </Form>
    );
  }
}

BudgetForm.propTypes = {
  onSave: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  onSave: value => dispatch(actions.addBudget(value)),
});

export default connect(null, mapDispatchToProps)(BudgetForm);
