import React from "react";
import KPI from "./KPI";

const KPIList = () => {
  const kpiData = [
    { title: "모든팩", amount: "₩26,380,557", comparison: "7.51", comparisonType: "up" },
    { title: "엠에스팩", amount: "₩29,081,351", comparison: "9.9", comparisonType: "down" },
    { title: "진포장", amount: "₩96,095,917", comparison: "7.51", comparisonType: "up" },
    { title: "승원팩", amount: "₩60,472,590", comparison: "7.51", comparisonType: "up" },
  ];

  return (
    <div className="bg-[#F5F5F5] p-6">
      <h2 className="text-lg font-bold text-gray-700 mb-4">Top4 업체별 예상 매출 현황</h2>
      <div className="flex gap-4">
        {kpiData.map((data, index) => (
          <KPI
            key={index}
            title={data.title}
            amount={data.amount}
            comparison={data.comparison}
            comparisonType={data.comparisonType}
          />
        ))}
      </div>
    </div>
  );
};

export default KPIList;
