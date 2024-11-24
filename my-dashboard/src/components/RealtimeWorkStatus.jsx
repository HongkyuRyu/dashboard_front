import React from "react";

const RealtimeWorkStatus = () => {
  const workStatus = [
    {
      product: "패종착85",
      company: "진포장",
      amount: "$1,000",
      status: "완료",
      statusColor: "bg-green-100 text-green-600",
    },
    {
      product: "[구이 2-18] 나이론(자동포장용)",
      company: "진산",
      amount: "$1,000",
      status: "작업지시 대기",
      statusColor: "bg-orange-100 text-orange-600",
    },
    {
      product: "전백후종70",
      company: "가인",
      amount: "$1,000",
      status: "작업진행중",
      statusColor: "bg-blue-100 text-blue-600",
    },
  ];

  return (
    <div className="bg-white shadow-md rounded-md p-6 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-800">실시간 공정 작업 현황</h2>
        <button
          type="button"
          className="text-blue-500 text-sm font-medium"
          aria-label="더보기"
        >
          더보기
        </button>
      </div>
      <table className="w-full text-left text-sm text-gray-600">
        <thead>
          <tr>
            <th className="py-2">품목명</th>
            <th className="py-2">업체명</th>
            <th className="py-2">작업지시량</th>
            <th className="py-2">상태</th>
          </tr>
        </thead>
        <tbody>
          {workStatus.map((work, index) => (
            <tr key={index} className="border-t">
              <td className="py-2">{work.product}</td>
              <td className="py-2">{work.company}</td>
              <td className="py-2">{work.amount}</td>
              <td className="py-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${work.statusColor}`}
                >
                  {work.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RealtimeWorkStatus;
