import React from "react";

const AddTransaction = () => {
  return (
    <div className="add-transaction">
      <h3>Add transaction</h3>
      <form>
        <div className="input-group">
          <input type="text" placeholder="Description" autoComplete="off" />
          <input type="number" name="" autoComplete="off" placeholder="0.00" />
          <select placeholder="Income or Expense">
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
