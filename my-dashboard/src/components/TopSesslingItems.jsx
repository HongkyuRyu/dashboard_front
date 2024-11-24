import React from "react";
import ItemCard from "./ItemCard";

const TopSellingItems = () => {
  const items = [
    {
      icon: "🛍️", // 아이콘 또는 이미지
      name: "나이론70=무지",
      percentage: 75,
      change: 10,
    },
    {
      icon: "📦", // 아이콘 또는 이미지
      name: "오씨피피(투명) 70",
      percentage: 65,
      change: 7,
    },
    {
      icon: "🔧", // 아이콘 또는 이미지
      name: "은박(무광) 130",
      percentage: 90,
      change: -1,
    },
  ];

  return (
    <div>
    <h2 className="text-lg font-bold text-gray-800 mb-4">
        Top 3 가장 많이 팔린 품목
      </h2>
    <div className="bg-white shadow-md rounded-md p-6 w-full max-w-sm">
      
      <div className="space-y-4">
        {items.map((item, index) => (
          <ItemCard
            key={index}
            icon={item.icon}
            name={item.name}
            percentage={item.percentage}
            change={item.change}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default TopSellingItems;
