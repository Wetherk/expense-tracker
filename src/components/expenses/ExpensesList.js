import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ expenses }) => {
    if (expenses.length === 0)
        return <p className="expenses-list__notFound">No expenses found.</p>;

    return (
        <ul className="expenses-list">
            {expenses.map(({ id, date, title, amount }) => (
                <ExpenseItem
                    key={id}
                    date={date}
                    title={title}
                    amount={amount}
                />
            ))}
        </ul>
    );
};

export default ExpensesList;
