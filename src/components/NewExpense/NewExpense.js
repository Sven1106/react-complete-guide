import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';
const NewExpense = (props) => {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.addOnNewExpense(expenseData);
        setIsFormVisible(false);
    }

    const AddNewExpenseHandler = () => {
        setIsFormVisible(true);
    }
    const CancelFormHandler = () => {
        setIsFormVisible(false);
    }

    return (
        <div className="new-expense">
            {
                isFormVisible === false &&
                (<button onClick={AddNewExpenseHandler}>Add new Expense</button>)
            }
            {
                isFormVisible === true &&
                (<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={CancelFormHandler} />)
            }
        </div>
    )
};

export default NewExpense;