import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
  }

  const isEditingHandler = () => {
    setIsEditing(true);
  }

  const stopEditing = () => {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
    {!isEditing && <button onClick={isEditingHandler} type="button">Add New Expense</button>}
    {isEditing && <ExpenseForm onSaveExpensedata={saveExpenseDataHandler} stopEditing={stopEditing} />}
    </div>
  );
};

export default NewExpense;
