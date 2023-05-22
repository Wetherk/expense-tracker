import "./ExpensesFilter.css";
import Card from "../UI/Card";

function ExpensesFilter({ value, years, onFilterChange }) {
    const handleExpenseFilterChange = (event) => {
        // if (filterValue === "All") {
        //     onFilterChange(expenses);
        //     return;
        // }
        // const filteredExpenses = [...expenses].filter(
        //     (expense) => expense.date.getFullYear().toString() === filterValue
        // );
        onFilterChange(event.target.value);
    };

    return (
        <Card className="expenses-filter">
            <p className="filter-label">Filter by year</p>
            <select
                className="filter-select"
                name="filterByYear"
                id="filterByYear"
                value={value}
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
