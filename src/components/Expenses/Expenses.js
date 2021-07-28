import ExpensesFilter from "./ExpensesFilter";
import Card from '../UI/Card';
import './Expenses.css';
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020");
    const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear);

    const yearChangeHandler = (year) => {
        setFilteredYear(year);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onYearChange={yearChangeHandler} selected={filteredYear} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    )
}

export default Expenses;