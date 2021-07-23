import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from '../UI/Card';
import './Expenses.css';
import { useState } from "react";
const Expenses = (props) => {
    const [filteredExpenses, setFilteredExpenses] = useState(props.items);
    const [filteredYear, setFilteredYear] = useState("2020");
    const yearChangeHandler = (year) => {
        setFilteredYear(year);
    }
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onYearChange={yearChangeHandler} selected={filteredYear} />
                {
                    filteredExpenses.map((expense) => {
                        return <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            date={expense.date}
                            amount={expense.amount}
                        />
                    })
                }
            </Card>
        </div>
    )
}

export default Expenses;