import "./ExpensesFilter.css";
import Card from "../UI/Card";

function ExpensesFilter({ expenses, onFilterChange }) {
    const handleExpenseFilterChange = (event) => {
        const filterValue = event.target.value;
        if (filterValue === "All") {
            onFilterChange(expenses);
            return;
        }

        const filteredExpenses = [...expenses].filter(
            (expense) => expense.date.getFullYear().toString() === filterValue
        );

        onFilterChange(filteredExpenses);
    };

    const years = [
        ...new Set(
            expenses.map((expense) => expense.date.getFullYear().toString())
        ),
    ];

    return (
        <Card className="expenses-filter">
            <p className="filter-label">Filter by year</p>
            <select
                className="filter-select"
                name="filterByYear"
                id="filterByYear"
                onChange={handleExpenseFilterChange}
            >
                <option value="All">All</option>
                {years.map((year) => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </select>
        </Card>
    );
}
export default ExpensesFilter;
