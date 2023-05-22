import { useState } from "react";

import "./NexExpense.css";
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";

function NexExpense({ onAddExpense }) {
    const [isCreating, setIsCreating] = useState(false);
    const handleAddNewExpenseClick = () => {
        setIsCreating(true);
    };
    const handleSaveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };

        onAddExpense(expenseData);
        setIsCreating(false);
    };
    const handleCancel = () => {
        setIsCreating(false);
    };

    return (
        <Card className="new-expense">
            {isCreating && (
                <ExpenseForm
                    onSaveExpenseData={handleSaveExpenseData}
                    onCancel={handleCancel}
                />
            )}
            {!isCreating && (
                <button
                    onClick={handleAddNewExpenseClick}
                    className="new-expense__button"
                >
                    Add New Expense
                </button>
            )}
        </Card>
    );
}

export default NexExpense;
