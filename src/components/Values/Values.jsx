import React from 'react';
import PropTypes from 'prop-types';
import Stat from '../Stat/Stat';
import css from './Values.module.css';

const Values = ({ budget, expenses, balance }) => {
  return (
    <div className={css.container}>
      <Stat label="Budget" value={budget} isPositive />
      <Stat label="Expenses" value={expenses} />
      <Stat label="Balance" value={balance} isPositive={budget >= expenses} />
    </div>
  );
};

Values.propTypes = {
  budget: PropTypes.number.isRequired,
  expenses: PropTypes.number.isRequired,
  balance: PropTypes.number.isRequired,
};
export default Values;
