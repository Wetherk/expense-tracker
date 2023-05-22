import { useState } from "react";

import Expenses from "./components/expenses/Expenses";
import NexExpense from "./components/newExpense/NewExpense";

function App() {
    const DUMMY_EXPENSES = [
        {
            id: "e1",
            title: "Toilet Paper",
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        {
            id: "e2",
            title: "New TV",
            amount: 799.49,
            date: new Date(2021, 2, 12),
        },
        {
            id: "e3",
            title: "Car Insurance",
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: "e4",
            title: "New Desk (Wooden)",
            amount: 450,
            date: new Date(2021, 5, 12),
        },
        {
            id: "e5",
            title: "Game Console",
            amount: 650,
            date: new Date(2023, 5, 12),
        },
    ];
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const handleAddExpense = (expense) => {
        setExpenses((oldExpenses) => [expense, ...oldExpenses]);
    };

    return (
        <div>
            <NexExpense onAddExpense={handleAddExpense} />
            <Expenses expenses={expenses} />
        </div>
    );
}

export default App;
