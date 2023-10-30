import React from 'react';

// Define the functional component 'TransactionItem' and Destructure the properties of the 'transaction' object
const TransactionItem = ({ transaction, onDelete }) => {
  const { id, date, description, category, amount } = transaction;

    // Convert 'amount' to a number and format it to 2 decimal places using parseFloat() and toFixed()
    const formattedAmount = parseFloat(amount).toFixed(2);

      // Render the JSX structure for each transaction item
  return (
    <li>
      {/* Display the date, description, category, and formatted amount */}
      <strong>{date}</strong> - {description} ({category}) - Amount: ${formattedAmount}

      {/* Render a "Delete" button with an event handler to call 'onDelete' with the transaction id */}
      <button className="delete-button" onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};

// Export the 'TransactionItem' component as the default export
export default TransactionItem;
