import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList({ expenses }) {
    const expensesList = expenses.map(({ id, date, title, amount }) => (
        <ExpenseItem key={id} date={date} title={title} amount={amount} />
    ));
    return <div className="expenses-list">{expensesList}</div>;
}

export default ExpensesList;
