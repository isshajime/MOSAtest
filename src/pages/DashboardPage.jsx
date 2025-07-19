import React, { useState } from 'react';
import './css/DashboardPage.css';

function DashboardSkeleton() {
  // Hard-coded for skeleton UI
  const currentBalance = 122_345.67;
  const goalProgressPct = 58; // e.g. 58% toward annual goal

  // Initial categories to display
  const [expenseRows, setExpenseRows] = useState([
    { category: 'Rent / Housing', budget: 1500 },
    { category: 'Groceries',     budget: 500 },
    { category: 'Transportation',budget: 200 },
  ]);

  const handleAddRow = () => {
    setExpenseRows(rows => [...rows, { category: '', budget: '' }]);
  };

  const handleChange = (idx, field, value) => {
    setExpenseRows(rows =>
      rows.map((r, i) =>
        i === idx ? { ...r, [field]: value } : r
      )
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // For skeleton, just log the current state
    console.log('Expense Categories:', expenseRows);
  }

  return (
    <div className="dashboard-skeleton">
      {/* Summary Card */}
      <div className="card summary-card">
        <h2>Current Balance</h2>
        <p>${currentBalance.toFixed(2)}</p>
        <h3>Yearly Savings Progress</h3>
        <progress value={goalProgressPct} max="100" />
        <span>{goalProgressPct}%</span>
      </div>

      {/* Expense Categories */}
            <div className="card expenses-card">
              <h2>Expense Categories</h2>
              {expenseRows.map((expenseRow, index) => (
                <div key={index} className="row">
                  <label htmlFor={`category-${index}`}>Expense Category: </label>
                  <input
                    type="text"
                    id={`category-${index}`}
                    name={`category-${index}`}                
                    value={expenseRow.category}
                    onChange={(e) => handleChange(index, 'category', e.target.value)}
                  />
                  <label htmlFor={`budget-${index}`}>Expense Budget: </label>
                  <input
                    type="number"
                    id={`budget-${index}`}
                    name={`budget-${index}`}
                    value={expenseRow.budget}
                    onChange={(e) => handleChange(index, 'budget', e.target.value)}
                  />
                </div>
              ))}

        <button type="button" onClick={handleAddRow}>
          + Add Expense Category
        </button>
        <button type="submit" onClick={handleSubmit}>
          Submit Expense Categories
        </button>
      </div>
    </div>
  );
}

export default DashboardSkeleton;