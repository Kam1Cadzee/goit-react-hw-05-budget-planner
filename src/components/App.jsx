import React from 'react';
import BudgetForm from './container/ContainerBudgetForm';
import ExpenseForm from './container/ContainerExpenseForm';
import ExpensesTable from './container/ContainerExpensesTable';
import Values from './container/ContainerValues';

const App = () => {
  return (
    <div
      style={{
        width: '80%',
        display: 'flex',
        margin: 'auto',
      }}
    >
      <div style={{ flexGrow: 1 }}>
        <BudgetForm />
        <ExpenseForm />
      </div>
      <div style={{ flexGrow: 1 }}>
        <Values />
        <ExpensesTable />
      </div>
    </div>
  );
};
export default App;
