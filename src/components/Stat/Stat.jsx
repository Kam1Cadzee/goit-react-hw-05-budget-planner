import React from 'react';
import PropTypes from 'prop-types';
import css from './Stat.module.css';

const Stat = ({ label, value, isPositive }) => {
  const style = isPositive ? { color: '#068200' } : null;
  return (
    <div>
      <p className={css.label} style={style}>
        {label}
      </p>
      <p className={css.value} style={style}>
        {value} $
      </p>
    </div>
  );
};
Stat.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  isPositive: PropTypes.bool,
};
Stat.defaultProps = {
  isPositive: false,
};
export default Stat;
