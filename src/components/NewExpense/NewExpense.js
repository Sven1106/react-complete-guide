import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';
const NewExpense = (props) => {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const expenseDataSaveHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.addOnNewExpense(expenseData);
        setIsFormVisible(false);
    }

    const ExpenseAddHandler = () => {
        setIsFormVisible(true);
    }
    const FormCancelHandler = () => {
        setIsFormVisible(false);
    }

    return (
        <div className="new-expense">
            {
                isFormVisible === false &&
                (<button onClick={ExpenseAddHandler}>Add new Expense</button>)
            }
            {
                isFormVisible === true &&
                (<ExpenseForm onExpenseDataSave={expenseDataSaveHandler} onFormCancel={FormCancelHandler} />)
            }
        </div>
    )
};

export default NewExpense;