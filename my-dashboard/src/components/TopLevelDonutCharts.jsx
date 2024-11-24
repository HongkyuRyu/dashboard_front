import React from "react";
import DoughnutChart from "./DoughnutChart";

const TopLevelDonutCharts = () => {
    const chartsData = [
      { percentage: 75, color: "#0B5FAE", label: "제대", value: 130000000 },
      { percentage: 90, color: "#D500F9", label: "인쇄", value: 320000000 },
      { percentage: 30, color: "#FFB300", label: "합지", value: 42000000 },
    ];
  
    return (
      <div className="bg-white shadow-md rounded-md p-6 w-full h-[400px]">
        <h2 className="text-lg font-bold text-gray-800 mb-4">
          공정별 평균 매출 분포 <span className="text-gray-400 text-sm">2024</span>
        </h2>
        <div className="flex justify-between items-center">
          {chartsData.map((chart, index) => (
            <DoughnutChart
              key={index}
              percentage={chart.percentage}
              color={chart.color}
              label={chart.label}
              value={chart.value}
            />
          ))}
        </div>
        <p className="text-gray-400 text-xs mt-4 text-center">
          평균 매출은 작업 지시량과 추정 단가를 이용해서, 실제 매출과 차이가 있을 수 있습니다.
        </p>
      </div>
    );
  };
  
  export default TopLevelDonutCharts;
  