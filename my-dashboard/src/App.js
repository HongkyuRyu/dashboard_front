import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import KPIList from "./components/KPIList";
import LineChart from "./components/LineChart";

const HomePage = () => (
  <div className="p-6">
    <KPIList />
    <div className="mt-10">
      <h1 className="text-2xl font-bold mb-4">업체별 예상 매출 추이</h1>
      <LineChart />
    </div>
  </div>
);
const LeaderboardPage = () => <div className="p-6">리더보드 페이지</div>;
const MessagePage = () => <div className="p-6">메시지 페이지</div>;
const SettingsPage = () => <div className="p-6">설정 페이지</div>;
const SupportPage = () => <div className="p-6">지원 요청 페이지</div>;

function App() {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />
        {/* Main Content */}
        <div className="flex-1 flex flex-col bg-gray-100 h-screen">
          {/* Header */}
          <Header />
          {/* Routes */}
          <div className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/leaderboard" element={<LeaderboardPage />} />
              <Route path="/message" element={<MessagePage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/support" element={<SupportPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
