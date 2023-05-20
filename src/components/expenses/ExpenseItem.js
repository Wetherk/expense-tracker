import { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem({ date, title, amount }) {
    const [expenseTitle, setExpenseTitle] = useState(title);

    return (
        <Card className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__details">
                <h2 className="expense-item__title">{expenseTitle}</h2>
                <div className="expense-item__amount">{amount} $</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;
