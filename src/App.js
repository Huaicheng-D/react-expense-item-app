import NewExpenseItem from "./components/NewExpense/NewExpenseItem";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const addExpenseHandler = (expenseData) => {
    console.log("In App");
    console.log(expenseData);
  };
  return (
    <div>
      <h2>Let's get started</h2>
      <NewExpenseItem onSaveExpenseData={addExpenseHandler} />
      <Expenses />
    </div>
  );
}

export default App;
