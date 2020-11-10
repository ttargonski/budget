import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Expense from "./Expense";
import Income from "./Income";

const Transactions = () => {
  const { incomeTransactions, expenseTransactions } = useContext(GlobalContext);

  return (
    <div className="transactions-wrapper">
      <div className="transactions income-transactions">
        <h4>Incomes</h4>

        <ul className="transaction-list">
          {incomeTransactions.map((income) => (
            <Income income={income} key={income.id} />
          ))}
        </ul>
      </div>
      <div className="transactions expense-transactions">
        <h4>Expenses</h4>
        <ul className="transaction-list">
          {expenseTransactions.map((expense) => (
            <Expense expense={expense} key={expense.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Transactions;
