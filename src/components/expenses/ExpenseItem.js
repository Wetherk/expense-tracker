import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem({ date, title, amount }) {
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={date} />
                <div className="expense-item__details">
                    <h2 className="expense-item__title">{title}</h2>
                    <div className="expense-item__amount">{amount} $</div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;
