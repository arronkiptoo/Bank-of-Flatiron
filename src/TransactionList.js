import React, { useState } from 'react';
import TransactionItem from './TransactionItem';

// Define the TransactionList functional component that receives 'transactions' and 'setTransactions' as props
const TransactionList = ({ transactions, setTransactions }) => {
    // Define state variables using useState hook for the form data, search term, and sorting key
    const [formData, setFormData] = useState({
      date: '',
      description: '',
      category: '',
      amount: '',
    });
    // Handle form input changes and update the 'formData' state accordingly
   const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

   // Handle changes to the search bar input and update the 'searchTerm' state accordingly
   const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle form submission to add a new transaction
  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate a new unique id for the new transaction (you can use a library like uuid for this)
    const newId = transactions.length + 1;

    // Create the new transaction object using form data and convert amount to a number
    const newTransaction = {
      id: newId,
      date: formData.date,
      description: formData.description,
      category: formData.category,
      amount: parseFloat(formData.amount),
    };
    // Generate a new unique id for the new transaction (you can use a library like uuid for this)
    const newId = transactions.length + 1;

    // Create the new transaction object using form data and convert amount to a number
    const newTransaction = {
      id: newId,
      date: formData.date,
      description: formData.description,
      category: formData.category,
      amount: parseFloat(formData.amount),
    };
// Add the new transaction to the 'transactions' state array using 'setTransactions'
     setTransactions([...transactions, newTransaction]);

     // Clear the form data after submission
     setFormData({
       date: '',
       description: '',
       category: '',
       amount: '',
     });
   };

     // Handle sorting when the "Sort by Category" or "Sort by Description" buttons are clicked
  const handleSort = (key) => {
    setSortKey(key);
  };
  // Handle deletion of a transaction by filtering out the deleted transaction using 'setTransactions'
  const handleDelete = (id) => {
    setTransactions((prevTransactions) =>
      prevTransactions.filter((transaction) => transaction.id !== id)
    );
  };

   // Render the JSX structure
   return (
    <div>
      <h2>Recent Transactions</h2>
      {/* Form to add a new transaction */}
      <form onSubmit={handleSubmit}>
        <input
        type="text"
        name="date"
        placeholder="Date"
        value={formData.date}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleInputChange}
            />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleInputChange}
        />
        <button type="submit" className="add-button">Add Transaction</button>
        {/* Input for the search bar */}
        <input
          type="text"
          placeholder="Search by description"
          value={searchTerm}
          onChange={handleSearch}
        />
        </form>
      {/* Buttons to sort transactions */}
      <div className="sort-buttons">
        <button onClick={() => handleSort('category')}>Sort by Category</button>
        <button onClick={() => handleSort('description')}>Sort by Description</button>
      </div>
      {/* List of transactions */}
      <ul>
        {sortedTransactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            onDelete={handleDelete}
            />
        ))}
      </ul>
    </div>
  );
};

// Export the TransactionList component as the default export
export default TransactionList;
