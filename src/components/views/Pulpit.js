import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const Pulpit = () => {
  const { incomeTransactions, expenseTransactions } = useContext(GlobalContext);

  const amountIncome = incomeTransactions.map((income) => {
    return Number(income.amount);
  });

  const amountExpense = expenseTransactions.map((expense) => {
    return Number(expense.amount);
  });

  const totalAmount = (value) => {
    let amount = 0;
    for (let i = 0; i < value.length; i++) {
      amount = amount + value[i];
    }
    return amount;
  };

  return (
    <div className="pulpit-wrapper">
      <div className="balance">
        <p>Your balance</p>
        <span>$ {totalAmount(amountIncome) - totalAmount(amountExpense)}</span>
      </div>
      <div className="stats">
        <div className="income">
          <p>Income</p> <span>$ {totalAmount(amountIncome)}</span>
        </div>
        <div className="expense">
          <p>Expense</p> <span>$ {totalAmount(amountExpense)}</span>
        </div>
      </div>
    </div>
  );
};

export default Pulpit;
