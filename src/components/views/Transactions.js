import React from "react";

const Transactions = () => {
  return (
    <div className="transactions-wrapper">
      <div className="transactions income-transactions">
      <h4>Income</h4>
        <ul className="transaction-list">
          <li>
            <span className="transaction-text">Wypłata</span>
            <span className="transaction-amount">$ 1000</span>
            <button className="delete-button">
              <i class="far fa-trash-alt"></i>
            </button>
          </li>
        </ul>
      </div>
      <div className="transactions expense-transactions">
      <h4>Expenses</h4>
        <ul className="transaction-list">
          <li>
            <span className="transaction-text">Wypłata</span>
            <span className="transaction-amount">$ 1000</span>
            <button className="delete-button">
              <i class="far fa-trash-alt"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Transactions;
