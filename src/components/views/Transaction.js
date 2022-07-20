import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { BsTrash } from "react-icons/bs";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <tr className="transaction">
      <td className="name">{transaction.desc}</td>
      <td className="category">{transaction.category}</td>
      <td className="date">{transaction.date}</td>
      <td className="amount">$ {transaction.amount}</td>
      <td className="delete">
        <BsTrash
          className="btn-delete"
          onClick={() => {
            deleteTransaction(transaction.id);
          }}
        />
      </td>
    </tr>
  );
};

export default Transaction;
