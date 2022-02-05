import "./ExpenseDate.css";

function ExpenseDate(props) {
  const expenseMonth = props.date.toLocaleString("en-US", { month: "long" });
  const expenseDay = props.date.toLocaleString("en-US", { day: "2-digit" });
  const expenseYear = props.date.getFullYear();
  return (
    <div className="expense-item__date">
      <div className="expense-item__month">{expenseMonth}</div>

      <div className="expense-item_year">{expenseYear}</div>
      <div className="expense-item__day">{expenseDay}</div>
    </div>
  );
}

export default ExpenseDate;
