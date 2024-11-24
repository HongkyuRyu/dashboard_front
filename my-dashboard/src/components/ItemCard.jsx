import React from "react";

const ItemCard = ({ icon, name, percentage, change }) => {
  const isUp = change > 0;
  const badgeColor = isUp ? "#1AC391" : "#F14D4D";
  const badgeBackground = isUp
    ? "rgba(26, 195, 145, 0.1)"
    : "rgba(241, 77, 77, 0.1)";

  return (
    <div className="flex items-center justify-between py-4 border-b last:border-b-0 border-gray-200">
      {/* Icon and Name */}
      <div className="flex items-center gap-4">
        <div
          className="w-10 h-10 flex items-center justify-center rounded-full"
          style={{ backgroundColor: badgeBackground }}
        >
          {icon}
        </div>
        <div>
          <p className="text-gray-800 font-medium">{name}</p>
          <p className="text-gray-400 text-sm">Compared to last year</p>
        </div>
      </div>
      {/* Percentage and Change */}
      <div className="text-right">
        <p className="text-gray-800 text-lg font-bold">{percentage}%</p>
        <p
          className="text-sm font-medium"
          style={{ color: badgeColor }}
        >
          {isUp ? `+${change}% ↑` : `${change}% ↓`}
        </p>
      </div>
    </div>
  );
};

export default ItemCard;
