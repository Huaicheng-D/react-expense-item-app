import "./NewExpenseItem.css";
import ExpenseForm from "./ExpenseForm";

function NewExpenseItem(props) {
  const saveExpenseDataHandle = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log("In NewExpense");
    console.log(expenseData);

    props.onSaveExpenseData(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandle} />
    </div>
  );
}
export default NewExpenseItem;
