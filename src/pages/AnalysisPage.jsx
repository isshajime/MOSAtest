import {React, useState} from "react";


function AnalysisPage() {
    <div className="analysis-page">
  {/* Header Section */}
  <div className="analysis-header">
    <h2>Financial Reflection & Analysis</h2>
    <p className="subtitle">Track your spending patterns and savings goals</p>
  </div>

  {/* Main Dashboard Grid */}
  <div className="dashboard-grid">
    
    {/* Monthly Expenses Card */}
    <div className="analysis-card">
      <div className="card-header">
        <h3>Monthly Expenses</h3>
        <select className="month-selector">
          <option>January 2025</option>
          <option>February 2025</option>
        </select>
      </div>
      <div className="expenses-summary">
        <div className="total-expenses">
          <span className="amount">$2,450</span>
          <span className="label">Total Spent</span>
        </div>
        <div className="trend-indicator">
          <span className="trend-up">↑ 12%</span> from last month
        </div>
      </div>
    </div>

    {/* Category Breakdown Card */}
    <div className="analysis-card">
      <div className="card-header">
        <h3>Category Breakdown</h3>
      </div>
      <div className="category-chart">
        {/* Placeholder for chart */}
        <div className="chart-placeholder"></div>
        <div className="category-legend">
          <div className="legend-item">
            <span className="color-dot housing"></span>
            <span>Rent/Housing</span>
            <span>35%</span>
          </div>
          {/* More legend items... */}
        </div>
      </div>
    </div>

    {/* Savings Projection Calculator */}
    <div className="analysis-card calculator">
      <div className="card-header">
        <h3>Savings Projection</h3>
      </div>
      <div className="calculator-controls">
        <div className="input-group">
          <label>Monthly Savings</label>
          <input type="number" placeholder="$500" />
        </div>
        <div className="input-group">
          <label>Annual Return Rate</label>
          <input type="number" placeholder="5%" />
        </div>
        <div className="input-group">
          <label>Time Period (years)</label>
          <input type="number" placeholder="5" />
        </div>
      </div>
      <div className="projection-result">
        <h4>Projected Savings:</h4>
        <div className="result-amount">$334,200</div>
      </div>
      <button className="calculate-btn">Calculate</button>
    </div>

    {/* Additional Analysis Section */}
    <div className="analysis-card insights">
      <div className="card-header">
        <h3>Spending Insights</h3>
      </div>
      <div className="insights-list">
        <div className="insight-item">
          <span>You spent 20% more on dining this month</span>
        </div>
        <div className="insight-item">
          <span>Your savings rate is 15% of income</span>
        </div>
      </div>
    </div>
  </div>
</div>
}

export default AnalysisPage;