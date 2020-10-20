import React from "react";

const Pulpit = () => {
  return (
    <div className="pulpit-wrapper">
      <div className="balance">
        <p>Your balance</p> <span>$0.00</span>
      </div>
      <div className="stats">
        <div className="income">
          <p>Income</p> <span>$0.00</span>
        </div>
        <div className="expense">
          <p>Expense</p> <span>$0.00</span>
        </div>
      </div>
    </div>
  );
};

export default Pulpit;
