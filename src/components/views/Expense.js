import React, {useContext} from 'react'
import{ GlobalContext} from "../../context/GlobalContext";

const Expense = ({expense}) => {
    const {deleteTransaction} = useContext(GlobalContext);
    
    return (
    <li>
            <span className="transaction-text">{expense.desc}</span>
            <span className="transaction-amount">$ {expense.amount}</span>
            <button className="delete-button" onClick={()=> deleteTransaction(expense.id)}>
              <i className="far fa-trash-alt"></i>
            </button>
    </li>

    )
}

export default Expense;
