import React, { useState, useEffect } from 'react';
import TransactionList from './TransactionList';
import './App.css';


// Define the main functional component 'App'
const App = () => {
  const [transactions, setTransactions] = useState([]);
  // Fetch the transaction data.
  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then((response) => response.json()) // Parse the response as JSON
      .then((data) => setTransactions(data)) // Update 'transactions' state with fetched data
      .catch((error) => console.error('Error fetching data:', error)); // Handle fetch errors
  }, []);
  // Render the main JSX structure
  return (
    <div className="container">
      {/* Display a heading */}
      <h1>Bank Transactions</h1>

      {/* Render the TransactionList component */}
      {/* Pass 'transactions' and 'setTransactions' as props to TransactionList */}
      <TransactionList transactions={transactions} setTransactions={setTransactions} />
    </div>
  );
};
// Export the 'App' component as the default export
export default App;
