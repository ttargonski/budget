import React, {useContext } from 'react'
import{ GlobalContext} from "../../context/GlobalContext";

const Income = ({income}) => {
    const {deleteTransaction} = useContext(GlobalContext);
    
    return (
    <li >
            <span className="transaction-text">{income.desc}</span>
            <span className="transaction-amount">$ {income.amount}</span>
            <button className="delete-button" onClick={() => {deleteTransaction(income.id)}}> 
              <i className="far fa-trash-alt"></i>
            </button>
    </li>

    )
}

export default Income;
