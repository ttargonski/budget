import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Transaction from "./Transaction";

const HistoryTransaction = () => {
  const { incomeTransactions, expenseTransactions } = useContext(GlobalContext);

  return (
    <div className="transactions">
      <h3>History transaction</h3>
      <div className="flex">
        <div>
          <h4>Incomes</h4>

          <table className="transaction-list">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Date</th>
                <th className="amount">Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {incomeTransactions.map((income) => (
                <Transaction transaction={income} key={income.id} />
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h4>Expenses</h4>
          <table className="transaction-list">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Date</th>
                <th className="amount">Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {expenseTransactions.map((expense) => (
                <Transaction transaction={expense} key={expense.id} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HistoryTransaction;
