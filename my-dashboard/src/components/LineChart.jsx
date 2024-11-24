import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const data = {
    labels: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    datasets: [
      {
        label: "모든팩",
        data: [5000, 7000, 6000, 8000, 10000, 12000, 15000, 13000, 17000, 19000, 20000, 22000],
        borderColor: "#1AC391",
        backgroundColor: "#1AC391",
        pointRadius: 4,
        pointHoverRadius: 6,
        tension: 0.4,
      },
      {
        label: "엠에스팩",
        data: [4000, 5000, 4000, 6000, 9000, 11000, 14000, 12000, 16000, 18000, 19000, 21000],
        borderColor: "#DF6F0B",
        backgroundColor: "#DF6F0B",
        pointRadius: 4,
        pointHoverRadius: 6,
        tension: 0.4,
      },
      {
        label: "진포장",
        data: [3000, 4000, 3000, 5000, 8000, 10000, 13000, 11000, 15000, 17000, 18000, 20000],
        borderColor: "#0B5FAE",
        backgroundColor: "#0B5FAE",
        pointRadius: 4,
        pointHoverRadius: 6,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#A5A5AE",
        },
      },
      tooltip: {
        enabled: false, // 기본 툴팁 비활성화
        external: (context) => {
          const tooltipModel = context.tooltip;

          // 툴팁 DOM 요소 가져오기
          let tooltipEl = document.getElementById("chartjs-tooltip");

          // 툴팁 DOM 요소가 없으면 새로 생성
          if (!tooltipEl) {
            tooltipEl = document.createElement("div");
            tooltipEl.id = "chartjs-tooltip";
            tooltipEl.style.position = "absolute";
            tooltipEl.style.background = "white";
            tooltipEl.style.border = "1px solid #E5E5E5";
            tooltipEl.style.borderRadius = "8px";
            tooltipEl.style.padding = "8px";
            tooltipEl.style.pointerEvents = "none";
            tooltipEl.style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.1)";
            document.body.appendChild(tooltipEl);
          }

          // 툴팁 숨기기
          if (tooltipModel.opacity === 0) {
            tooltipEl.style.opacity = 0;
            return;
          }

          // 툴팁 위치 및 스타일 업데이트
          const position = context.chart.canvas.getBoundingClientRect();
          tooltipEl.style.opacity = 1;
          tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + "px";
          tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + "px";

          // 툴팁 내용 생성
          const tooltipData = tooltipModel.dataPoints.map((dataPoint) => {
            const { dataset, dataIndex } = dataPoint;
            const value = dataset.data[dataIndex];
            const prevValue = dataset.data[dataIndex - 1] || value;
            const change = ((value - prevValue) / prevValue) * 100 || 0;

            const badgeStyle =
              change > 0
                ? `<span style="color: #1AC391; background: rgba(26, 195, 145, 0.1); padding: 2px 4px; border-radius: 4px;">+${change.toFixed(
                    1
                  )}% ↑</span>`
                : `<span style="color: #F14D4D; background: rgba(241, 77, 77, 0.1); padding: 2px 4px; border-radius: 4px;">${change.toFixed(
                    1
                  )}% ↓</span>`;

            return `<div style="margin-bottom: 4px;">
              <span style="color: ${dataset.borderColor}; font-weight: bold;">${dataset.label}</span>: $${value.toLocaleString()} ${badgeStyle}
            </div>`;
          });

          tooltipEl.innerHTML = `
            <div style="font-size: 14px; font-weight: bold; margin-bottom: 8px;">${tooltipModel.title}</div>
            ${tooltipData.join("")}
          `;
        },
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
    <div>
        <h2 className="text-lg font-bold text-gray-700 mb-4">업체별 매출 추이</h2>
    <div className="bg-white shadow-md rounded-md p-4"
     style={{ height: "400px", width: "100%" }}>
      <Line data={data} options={options} />
    </div>
    </div>
  );
};

export default LineChart;
