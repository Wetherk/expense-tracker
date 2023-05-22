import { useState } from "react";

import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses({ expenses }) {
    const [filterValue, setFilterValue] = useState("All");

    const handleFilterChange = (filterValue) => {
        setFilterValue(filterValue);
    };

    const years = [
        ...new Set(
            expenses.map((expense) => expense.date.getFullYear().toString())
        ),
    ];

    const filteredExpenses = expenses.filter(
        (expense) =>
            filterValue === "All" ||
            expense.date.getFullYear().toString() === filterValue
    );

    return (
        <div>
            <ExpensesFilter
                years={years}
                value={filterValue}
                onFilterChange={handleFilterChange}
            />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList expenses={filteredExpenses} />
        </div>
    );
}

export default Expenses;
