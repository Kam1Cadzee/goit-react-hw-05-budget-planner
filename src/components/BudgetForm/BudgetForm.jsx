import React from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import css from './BudgetForm.module.css';

class BudgetForm extends React.Component {
  state = {
    value: '',
  };

  handleChange = ({ target }) => this.setState({ value: target.value });

  handelClick = () => {
    const { saveBudget } = this.props;
    const { value } = this.state;
    saveBudget(+value);
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <form className={css.form}>
        <TextField
          label="Enter your total budget"
          type="number"
          value={value}
          onChange={this.handleChange}
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={this.handelClick}>
          Save
        </Button>
      </form>
    );
  }
}
BudgetForm.propTypes = {
  saveBudget: PropTypes.func.isRequired,
};
export default BudgetForm;
