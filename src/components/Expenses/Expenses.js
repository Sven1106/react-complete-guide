import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import './Expenses.css';
const Expenses = (props) => {
    return (

        <Card className="expenses">
            {
                props.items.map((expense) => {
                    return <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        date={expense.date}
                        amount={expense.amount}
                    />
                })
            }
        </Card>
    )
}

export default Expenses;