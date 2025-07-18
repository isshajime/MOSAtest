import './SetupPage.css';

import React from 'react';

function ProfileForm() {
    
    const handleSubmitProfile = (event) => {
        event.preventDefault();
        const profileData = {
            name: event.target.name.value,
            occupation: event.target.occupation.value,
        };
        console.log('Profile Data:', profileData);
    };
    return (
        <form onSubmit={handleSubmitProfile}>
            <h2>Profile Information</h2>
            <div>
                <label htmlFor="name">What is your full name? </label>
                <input type="text" id="name" name="name" />
            </div>
            <div>
                <label htmlFor="occupation">Occupation</label>
                <input type="text" id="occupation" name="occupation" />
            </div>
            <button type="submit">Submit Profile</button>
        </form>
    );
}

function FinancialDetailsForm() {
    const [incomeAmount, setIncomeAmount] = React.useState('');
    const [expenseRows, setExpenseRows] = React.useState([
        { expenseCategory: '', expenseBudget: '' },
    ]);


    // Add new expense row with empty expense category and budget fields
    const handleAddExpenseRow = () => {
        setExpenseRows([...expenseRows, { expenseCategory: '', expenseBudget: '' }]);
    }

    const handleIncomeChange = (value) => {
        setIncomeAmount(value);
    }

    const handleExpenseChange = (index, field, value) => {
        setExpenseRows(expenseRows =>
            expenseRows.map((row, i) =>
                i === index ? { ...row, [field]: value } : row
            )  
        );
    };

    // Handle when form submitted
    const handleSubmit = (event) => {
        event.preventDefault();

        const financialDetails = {
            incomeAmount: parseFloat(incomeAmount),
            expenses: expenseRows
                .filter(row => row.expenseCategory && row.expenseBudget)
                .map(row => ({
                    expenseCategory: row.expenseCategory.trim(),
                    expenseBudget: row.expenseBudget.trim(),
            })),
        };

        // For now, just log the financial details to the console
        console.log('Financial Details:', financialDetails);
    }

    return (
        <div className="financial-details-form">
        <form onSubmit={handleSubmit}>
            <h2>Financial Details</h2>
            <div>
                <label htmlFor="income">What is your annual income? </label>
                <input 
                    type="number" 
                    id="income" 
                    name="income" 
                    value={incomeAmount}
                    onChange={(e) => handleIncomeChange(e.target.value)}
                />
            </div>
            <h3>Expense Categories</h3>
            {expenseRows.map((expenseRow, index) => (
            <div key={index} className="row">
                <label htmlFor={`category-${index}`}>Expense Category: </label>
                <input
                    type="text"
                    id={`category-${index}`}
                    name={`category-${index}`}                
                    value={expenseRow.expenseCategory}
                    onChange={(e) => handleExpenseChange(index, 'expenseCategory', e.target.value)}
                />
                <label htmlFor={`budget-${index}`}>Expense Budget: </label>
                <input
                    type="number"
                    id={`budget-${index}`}
                    name={`budget-${index}`}
                    value={expenseRow.expenseBudget}
                    onChange={(e) => handleExpenseChange(index, 'expenseBudget', e.target.value)}
                />
            </div>
            ))}
            <div>
                <button type="button" onClick={handleAddExpenseRow}>
                    Add Expense Category
                </button>
            </div>
            <button type="submit">
                Submit
            </button>
        </form>
        </div>
    );
}


function SetupPage() {
    return (
        <div className="setup-page">
            <h1>Setup Page</h1>
            <p>Welcome to the setup page!</p>
            <ProfileForm />
            <FinancialDetailsForm />
        </div>
    );
};

export default SetupPage;
