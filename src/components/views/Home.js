import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const Home = () => {
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

  const percentagesCategory = (category) => {
    if (expenseTransactions.length === 0) {
      return 0;
    } else {
      // get array with category
      const result = expenseTransactions.filter(
        (expense) => expense.category === category
      );

      // get amount
      const amountCategory = result.map((res) => {
        return Number(res.amount);
      });

      // get percentages
      const percentages =
        (totalAmount(amountCategory) / totalAmount(amountExpense)) * 100;

      return percentages.toFixed(2);
    }
  };

  return (
    <div className="home">
      <h3>Dashboard</h3>
      <div className="grid">
        <div className="box balance">
          <p>Your balance</p>
          <span>
            $ {totalAmount(amountIncome) - totalAmount(amountExpense)}
          </span>
        </div>
        <div className="box income">
          <p>Income</p> <span>$ {totalAmount(amountIncome)}</span>
        </div>
        <div className="box expense">
          <p>Expense</p> <span>$ {totalAmount(amountExpense)}</span>
        </div>
      </div>
      <h3>Expenses as a percentage</h3>
      <div className="grid">
        <div className="box stats">
          <p>Food and drinks</p>
          <span>{percentagesCategory("Food and drinks")} %</span>
        </div>
        <div className="box stats">
          <p>Shopping</p>
          <span>{percentagesCategory("Shopping")} %</span>
        </div>
        <div className="box stats">
          <p>House and apartment</p>
          <span>{percentagesCategory("House and apartment")} %</span>
        </div>
        <div className="box stats">
          <p>Car and transport</p>
          <span>{percentagesCategory("Car and transport")} %</span>
        </div>
        <div className="box stats">
          <p>Life and entertainment</p>
          <span>{percentagesCategory("Life and entertainment")} %</span>
        </div>
        <div className="box stats">
          <p>Investments and savings</p>
          <span>{percentagesCategory("Investments and savings")} %</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
