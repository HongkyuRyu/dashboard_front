import React, { useState } from "react";

const Header = () => {
  const [selectedDate, setSelectedDate] = useState("2024-11");

  const dateOptions = [
    { label: "2024년 9월", value: "2024-09" },
    { label: "2024년 10월", value: "2024-10" },
    { label: "2024년 11월", value: "2024-11" },
  ];

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="bg-[#F5F5F5] flex items-center justify-between px-6 py-4 shadow-md">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-bold text-[#110D59]">전체 현황</h1>
        {/* Dropdown */}
        <div className="flex items-center">
          <label htmlFor="date-select" className="text-sm font-medium mr-2 text-gray-600">
            날짜
          </label>
          <select
            id="date-select"
            value={selectedDate}
            onChange={handleDateChange}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#110D59] focus:border-[#110D59]"
          >
            {dateOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="무엇이든 검색해보세요.."
            className="border border-gray-300 rounded-md px-4 py-2 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-[#110D59] focus:border-[#110D59]"
          />
          <span className="absolute inset-y-0 right-3 flex items-center text-gray-500">
            🔍
          </span>
        </div>

        {/* Notifications Icon */}
        <div className="relative">
          <span className="text-gray-700 text-lg">🔔</span>
          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full"></span>
        </div>

        {/* User Info */}
        <div className="text-gray-700 text-sm font-medium">류홍규 ▾</div>
      </div>
    </div>
  );
};

export default Header;
