import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { uuid } from "uuidv4";

const AddTransaction = () => {
  const { addIncomeTransaction, addExpenseTransaction } = useContext(
    GlobalContext
  );

  const [transaction, setTransaction] = useState({
    desc: "",
    amount: "",
    category: "",
  });

  const onChangeTransaction = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  const onSubmitTransaction = (e) => {
    e.preventDefault();
    if (
      transaction.desc !== "" &&
      transaction.amount !== "" &&
      transaction.category !== ""
    ) {
      const newTransaction = {
        id: uuid(),
        desc: transaction.desc,
        amount: transaction.amount,
      };
      if (transaction.category === "Income") {
        console.log(newTransaction);
        addIncomeTransaction(newTransaction);
      }
      if (transaction.category === "Expense") {
        addExpenseTransaction(newTransaction);
      }
      setTransaction({
        desc: "",
        amount: "",
        category: "",
      });
    }

    console.log(transaction);
  };

  return (
    <div className="add-transaction">
      <h3>Add transaction</h3>
      <form onSubmit={onSubmitTransaction}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Description"
            name="desc"
            autoComplete="off"
            onChange={onChangeTransaction}
            value={transaction.desc}
            maxlength="30"
          />
          <input
            type="number"
            name="amount"
            autoComplete="off"
            placeholder="0"
            onChange={onChangeTransaction}
            value={transaction.amount}
          />
          <select
            placeholder="Income or Expense"
            name="category"
            onChange={onChangeTransaction}
            value={transaction.category}
          >
            <option value="">- Please choose -</option>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </div>
        <input className="submit" type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddTransaction;
