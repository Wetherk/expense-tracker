import "./NexExpense.css";
import ExpenseForm from "./ExpenseForm";
import Card from "../UI/Card";

function NexExpense({ onAddExpense }) {
    const handleSaveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        onAddExpense(expenseData);
    };

    return (
        <Card className="new-expense">
            <ExpenseForm onSaveExpenseData={handleSaveExpenseData} />
        </Card>
    );
}

export default NexExpense;
