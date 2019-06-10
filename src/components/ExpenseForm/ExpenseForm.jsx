import React from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import css from './ExpenseForm.module.css';

class ExpenseForm extends React.Component {
  state = {
    name: '',
    value: 0,
  };

  handleChange = ({ target }) => this.setState({ [target.name]: target.value });

  handelClick = () => {
    const { addExpenseItem } = this.props;
    const { value, name } = this.state;
    addExpenseItem(name, +value);
    this.setState({ value: 0, name: '' });
  };

  render() {
    const { value, name } = this.state;
    return (
      <form className={css.form}>
        <TextField
          label="Enter expense name"
          name="name"
          value={name}
          onChange={this.handleChange}
          margin="normal"
        />
        <TextField
          label="Enter expense amount"
          name="value"
          type="number"
          value={value}
          onChange={this.handleChange}
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={this.handelClick}>
          ADD
        </Button>
      </form>
    );
  }
}
ExpenseForm.propTypes = {
  addExpenseItem: PropTypes.func.isRequired,
};

export default ExpenseForm;
