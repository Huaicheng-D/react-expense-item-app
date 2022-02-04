import ExpenseItem from "./components/ExpenseItem";
import NewExpenseItem from "./components/NewExpenseItem";
function App() {
  return (
    <div>
      <h2>Let's get started</h2>
      <NewExpenseItem />
      <ExpenseItem />
    </div>
  );
}

export default App;
