import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ["1월", "2월", "3월", "4월", "5월", "6월"],
    datasets: [
      {
        label: "엠에스팩",
        data: [5000, 6000, 4000, 8000, 10000, 12000],
        backgroundColor: "#DF6F0B",
      },
      {
        label: "진포장",
        data: [4000, 5000, 3000, 7000, 9000, 11000],
        backgroundColor: "#0B5FAE",
      },
      {
        label: "모든팩",
        data: [3000, 4000, 2000, 6000, 8000, 10000],
        backgroundColor: "#1AC391",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#A5A5AE",
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: "white",
        titleColor: "#000",
        bodyColor: "#000",
        borderColor: "#E5E5E5",
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#A5A5AE",
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: "#A5A5AE",
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
      },
    },
  };

  return (
    <div className="bg-white shadow-md rounded-md p-4 w-full">
      <h2 className="text-lg font-bold text-gray-800 mb-4">
        협력사 예상 매출액
      </h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
