import { connect } from 'react-redux';
import { setTotalBudget } from '../../redux/budget/budgetActions';
import BudgetForm from '../BudgetForm/BudgetForm';

const mapDispatchToProps = {
  saveBudget: setTotalBudget,
};
export default connect(
  null,
  mapDispatchToProps,
)(BudgetForm);
