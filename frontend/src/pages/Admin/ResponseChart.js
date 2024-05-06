import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";

const ResponseChart = ({ data }) => {
  const [chart, setChart] = useState(null);
  const [filter, setFilter] = useState('day');

  useEffect(() => {
    if (chart) {
      chart.destroy();
    }

    const ctx = document.getElementById('responseChart');
    const newChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: getLabels(filter),
        datasets: [{
          label: 'Days with No Response',
          data: data,
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          tooltip: {
            mode: 'index',
            intersect: false
          },
          responsive: true,
          animation: {
            duration: 1000,
            easing: 'easeInOutQuart'
          }
        }
      }
    });
    setChart(newChart);

    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, [data, filter]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const getLabels = (filter) => {
    // Logic to generate labels based on filter
    switch (filter) {
      case 'day':
        return ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];
      case 'week':
        return ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
      case 'month':
        return ['Month 1', 'Month 2', 'Month 3', 'Month 4'];
      case 'year':
        return ['Year 1', 'Year 2', 'Year 3', 'Year 4'];
      default:
        return [];
    }
  };

  return (
    <div>
      <canvas id="responseChart"></canvas>
      <div>
        <label style={{ textTransform: 'uppercase' }}>
          Filter by:
          <select value={filter} onChange={handleFilterChange}>
            <option value="day">Day</option>
            <option value="week">Week</option>
            <option value="month">Month</option>
            <option value="year">Year</option>
          </select>
        </label>
      </div>
    </div>
  );
};

// Dummy data for the chart
const dummyData = [10, 15, 20, 25, 30, 35, 40];

const DummyResponseChart = () => {
  return <ResponseChart data={dummyData} />;
};

export default DummyResponseChart;
