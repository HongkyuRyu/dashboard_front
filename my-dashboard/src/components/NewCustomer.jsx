import React from "react";

const NewCustomers = () => {
  const customers = [
    { name: "코코볼팩", date: "2024년 11월 24일 첫 거래", avatar: "🟠" },
    { name: "콘푸라이트팩", date: "2024년 3월 8일 첫 거래", avatar: "🟡" },
    { name: "오레오팩", date: "2024년 2월 6일 첫 거래", avatar: "🔵" },
    { name: "후르츠링팩", date: "2024년 7월 21일 첫 거래", avatar: "🟢" },
  ];

  return (
    <div className="bg-white shadow-md rounded-md p-6 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-800">새로운 고객 현황</h2>
        <button
          type="button"
          className="text-blue-500 text-sm font-medium"
          aria-label="더보기"
        >
          더보기
        </button>
      </div>
      <ul className="space-y-4">
        {customers.map((customer, index) => (
          <li key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-lg">
                {customer.avatar}
              </div>
              <div>
                <p className="font-medium text-gray-800">{customer.name}</p>
                <p className="text-gray-500 text-sm">{customer.date}</p>
              </div>
            </div>
            <button
              type="button"
              className="text-gray-400 hover:text-gray-600"
              aria-label="옵션 더보기"
            >
              ⋮
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewCustomers;
