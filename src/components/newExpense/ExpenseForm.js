import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm({ onSaveExpenseData }) {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const handleTitleChange = (event) => {
        setEnteredTitle(event.target.value);
    };
    const handleAmountChange = (event) => {
        setEnteredAmount(event.target.value);
    };
    const handleDateChange = (event) => {
        setEnteredDate(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };
        onSaveExpenseData(expenseData);

        clearForm();
    };

    const clearForm = () => {
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };

    return (
        <form className="expense-form" onSubmit={handleFormSubmit}>
            <div className="form-control">
                <label>Title</label>
                <input
                    required
                    value={enteredTitle}
                    onChange={handleTitleChange}
                    type="text"
                />
            </div>
            <div className="form-control">
                <label>Amount</label>
                <input
                    required
                    value={enteredAmount}
                    onChange={handleAmountChange}
                    type="number"
                    min="0.01"
                    step="0.01"
                />
            </div>
            <div className="form-control">
                <label>Date</label>
                <input
                    required
                    value={enteredDate}
                    onChange={handleDateChange}
                    type="date"
                />
            </div>
            <div className="form-actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
