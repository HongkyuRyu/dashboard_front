import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(null);

  const menuItems = [
    { id: 1, label: "전체 현황", icon: "📊", path: "/" },
    { id: 2, label: "리더보드", icon: "📈", path: "/leaderboard" },
  ];

  const otherItems = [
    { id: 3, label: "메시지", icon: "✉️", path: "/message" },
    { id: 4, label: "설정", icon: "⚙️", path: "/settings" },
    { id: 5, label: "데이터 분석팀 지원 요청", icon: "📞", path: "/support" },
  ];

  return (
    <div className="bg-[#110D59] h-screen w-64 flex flex-col justify-between py-6">
      {/* Logo Section */}
      <div className="px-6">
        <div className="text-white text-2xl font-bold mb-6">다산팩 대시보드</div>
        {/* Top Menu */}
        <div className="space-y-4">
          {menuItems.map((item) => (
            <Link
              to={item.path}
              key={item.id}
              className={`flex items-center gap-4 px-4 py-2 rounded-md cursor-pointer 
                ${
                  activeItem === item.id
                    ? "bg-white text-[#110D59] font-bold"
                    : "text-white"
                }
              `}
              onClick={() => setActiveItem(item.id)}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Other Section */}
      <div className="px-6">
        <div className="text-white text-sm mb-2">OTHER</div>
        <div className="space-y-4">
          {otherItems.map((item) => (
            <Link
              to={item.path}
              key={item.id}
              className={`flex items-center gap-4 px-4 py-2 rounded-md cursor-pointer 
                ${
                  activeItem === item.id
                    ? "bg-white text-[#110D59] font-bold"
                    : "text-white"
                }
              `}
              onClick={() => setActiveItem(item.id)}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
