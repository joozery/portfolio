import React from 'react';
import { Line } from 'react-chartjs-2';
import './Dashboard.css';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Revenue',
      data: [12000, 15000, 13000, 17000, 19000, 22000],
      fill: false,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(75,192,192,1)',
    },
  ],
};

function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Welcome to the Dashboard</h1>
      </header>

      <div className="dashboard-content">
        <div className="dashboard-widget">
          <h2>Total Users</h2>
          <p>1,230</p>
        </div>
        <div className="dashboard-widget">
          <h2>Revenue</h2>
          <p>$25,000</p>
        </div>
        <div className="dashboard-chart">
          <h2>Performance Chart</h2>
          <Line data={data} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
