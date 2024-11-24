import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip);

const DoughnutChart = ({ percentage, color, label, value }) => {
  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: [color, "#F5F5F5"],
        hoverBackgroundColor: [color, "#F5F5F5"],
        borderWidth: 0,
        cutout: "80%",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // 크기 비율을 무시하고 조정 가능
    plugins: {
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div className="relative w-40 h-40 mx-auto">
      {/* 도넛 그래프 */}
      <Doughnut data={data} options={options} />
      {/* 중앙 텍스트 */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-2xl font-bold text-gray-800">{percentage}%</p>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-base text-gray-800 font-medium">
          ₩{value.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default DoughnutChart;
