import React from "react";

const KPI = ({ title, amount, comparison, comparisonType }) => {
  const isUp = comparisonType === "up";
  const badgeColor = isUp ? "#1AC391" : "#F14D4D";
  const badgeBackground = isUp ? "rgba(26, 195, 145, 0.1)" : "rgba(241, 77, 77, 0.1)";

  return (
    <div className="flex flex-col bg-white shadow-md rounded-md p-4 flex-grow">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h3 className="text-gray-700 text-sm font-medium">{title}</h3>
        {/* Badge */}
        <span
          className="flex items-center justify-center text-sm font-bold px-2 py-1 rounded-lg"
          style={{
            color: badgeColor,
            backgroundColor: badgeBackground,
          }}
        >
          {isUp ? `+${comparison}% ↑` : `-${comparison}% ↓`}
        </span>
      </div>
      {/* Amount */}
      <p className="text-2xl font-bold text-gray-800 mt-4">{amount}</p>
      <span className="text-gray-400 text-xs">지난해 대비</span>
    </div>
  );
};

export default KPI;
