import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { v4 as uuidv4 } from "uuid";

const AddTransaction = () => {
  const { addIncomeTransaction, addExpenseTransaction } =
    useContext(GlobalContext);

  const [transaction, setTransaction] = useState({
    desc: "",
    amount: "",
    incomeExpense: "",
    category: "Without categories",
  });

  const onChangeTransaction = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  const onSubmitTransaction = (e) => {
    e.preventDefault();
    const today = new Date();

    if (
      transaction.desc !== "" &&
      transaction.amount !== "" &&
      transaction.incomeExpense !== ""
    ) {
      const newTransaction = {
        id: uuidv4(),
        desc: transaction.desc,
        amount: transaction.amount,
        category: transaction.category,
        date: today.toLocaleDateString("en-US"),
      };

      if (transaction.incomeExpense === "Income") {
        addIncomeTransaction(newTransaction);
      }
      if (transaction.incomeExpense === "Expense") {
        addExpenseTransaction(newTransaction);
      }
      setTransaction({
        desc: "",
        amount: "",
        incomeExpense: "",
        category: "Without categories",
      });
    }
  };

  return (
    <div className="add-transaction">
      <h3>Add transaction</h3>
      <form onSubmit={onSubmitTransaction}>
        <input
          type="text"
          placeholder="Transaction name"
          name="desc"
          autoComplete="off"
          onChange={onChangeTransaction}
          value={transaction.desc}
          required
          maxLength={30}
        />
        <div className="form-group">
          <input
            type="number"
            name="amount"
            autoComplete="off"
            placeholder="0"
            onChange={onChangeTransaction}
            value={transaction.amount}
            required
            max={100000}
          />
          <select
            placeholder="Income or Expense"
            name="incomeExpense"
            onChange={onChangeTransaction}
            value={transaction.incomeExpense}
            required
          >
            <option value="" disabled selected>
              - Please choose -
            </option>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </div>
        <select
          placeholder="Category"
          name="category"
          onChange={onChangeTransaction}
          value={transaction.category}
        >
          <option value="Without categories">Without categories</option>
          <option value="Food and drinks">Food and drinks</option>
          <option value="Shopping">Shopping</option>
          <option value="House and apartment">House and apartment</option>
          <option value="Car and transport">Car and transport</option>
          <option value="Life and entertainment">Life and entertainment</option>
          <option value="Investments and savings">
            Investments and savings
          </option>
        </select>

        <button className="submit" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
