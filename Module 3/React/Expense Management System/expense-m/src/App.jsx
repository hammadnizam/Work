import { useState } from "react";
import "./App.css";

function App() {
  let [amount, setAmount] = useState(0);
  let [type, setType] = useState("income");
  let [transaction, setTransactions] = useState([]);

  let handleTransactions = () => {
    setTransactions([...transaction, { amount, type }]);
    setAmount(0);
  };

  let totalIncome = transaction.reduce((acc, curr) => {
    return curr.type === 'income' ? acc + Number(curr.amount) : acc;
  }, 0);

  let totalExpense = transaction.reduce((acc, curr) => {
    return curr.type === 'expense' ? acc + Number(curr.amount) : acc;
  }, 0);

  let balance = totalIncome - totalExpense;

  let delExpense = (index) => {
    let copy = [...transaction];
    copy.splice(index, 1);
    setTransactions(copy);
  };

  let editExpense = (index) => {
    // Get the current transaction to be edited
    let currentTransaction = transaction[index];
    let newAmount = prompt('Enter Updated Amount', currentTransaction.amount);
    let newType = prompt('Enter Updated Type (income/expense)', currentTransaction.type);

    // Validate and update the transaction
    if (newAmount !== null && newType !== null) {
      if (isNaN(newAmount) || (newType !== 'income' && newType !== 'expense')) {
        alert('Invalid input');
        return;
      }

      let updatedTransactions = [...transaction];
      updatedTransactions[index] = { amount: Number(newAmount), type: newType };
      setTransactions(updatedTransactions);
    }
  };

  return (
    <>
      <h1 style={{fontFamily: 'cursive', color:'red'}}>Expense Management System</h1>

      <div>
        <div style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: 'lightblue' }}>
          <div>
            <p>Total Income</p>
            <p>{totalIncome}</p>
          </div>
          <div>
            <p>Total Expense</p>
            <p>{totalExpense}</p>
          </div>
          <div>
            <p>Balance</p>
            <p>{balance}</p>
          </div>
        </div>
        <br />
        <input
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
          type="text"
          name=""
          id=""
        />
        <select
          onChange={(e) => setType(e.target.value)}
          value={type}
          name=""
          id=""
        >
          <option value="income" style={{ backgroundColor: 'green' }}>income</option>
          <option value="expense" style={{ backgroundColor: 'red' }}>expense</option>
        </select>
        <br /><br />
        <button onClick={handleTransactions} style={{ backgroundColor: 'palegreen', }}>Submit</button>

        <div>
          <ol>
            {transaction.map((data, index) => (
              <li key={index}>
                {data.amount} {data.type}
                <button onClick={() => delExpense(index)} style={{ backgroundColor: 'red', color:'white' }}>Delete</button>
                <button onClick={() => editExpense(index)} style={{ backgroundColor: 'purple', color:'white' }}>Edit</button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
