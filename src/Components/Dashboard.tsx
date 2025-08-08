import '../App.css';
import React, { useState } from 'react';
import EmployeeGrid from './EmployeeGrid';
import { useTheme } from '../context/theme/useTheme';
import { useDebounce } from '../hooks/useDebounce';

const Dashboard: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [filterText, setFilterText] = useState('');
  const debouncedFilterText = useDebounce(filterText, 300);

  return (
    <div className={`dashboard-container ${theme}`}>
      <div className="dashboard-header">
        <h1 className={`dashboard-title ${theme}`}>FactWise Employee Dashboard</h1>
        <input
            type="text"
            className="search-box"
            placeholder="Search by Name or Department"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            />
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          {theme === 'light' ? ' ☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
      <EmployeeGrid  quickFilterText={debouncedFilterText}/>
    </div>
  );
};

export default Dashboard;
