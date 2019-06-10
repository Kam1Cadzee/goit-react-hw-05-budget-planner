import { connect } from 'react-redux';
import { addExpenseItem } from '../../redux/budget/budgetActions';
import ExpenseForm from '../ExpenseForm/ExpenseForm';

const mapDispatchToProps = {
  addExpenseItem,
};
export default connect(
  null,
  mapDispatchToProps,
)(ExpenseForm);
