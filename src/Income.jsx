import React, { useState } from 'react';

const Income = () => {
  const [income, setIncome] = useState('');
  const [incomeSubmitted, setIncomeSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`User's income: ${income}`);
    
    // Update incomeSubmitted state
    setIncomeSubmitted(true);
    console.log("incomeSubmitted: " + incomeSubmitted);
  };

  return (
    <div>
      <h2>Income Information</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="income">Enter your current income: </label>
        <input
          type="number"
          id="income"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          placeholder="Enter income"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Income;


// import React, { useState } from 'react';

// function Income() {
//   return (
//     <div>
//       <h1>Income Data</h1>
//       {/* <form onSubmit={handleSubmit}> */}
//         {/* <label htmlFor="income">Enter your current income:</label> */}
//         <input
//           type="number"
//           id="income"
//         //   value={income}
//           onChange={(e) => setIncome(e.target.value)}
//           placeholder="Enter income"
//           required
//         />
//         {/* <button type="submit">Submit</button> */}
//       {/* </form> */}
//     </div>
//   );
// };

// export default Income;