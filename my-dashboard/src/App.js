import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import KPIList from "./components/KPIList";
import LineChart from "./components/LineChart";
import TopSellingItems from "./components/TopSesslingItems";
import BarChart from "./components/BarChart";
import TopLevelDonutCharts from "./components/TopLevelDonutCharts";
import NewCustomers from "./components/NewCustomer";
import RealtimeWorkStatus from "./components/RealtimeWorkStatus";
const HomePage = () => (
  <div className="p-6">
    <KPIList />
    <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
      <LineChart />
      </div>
      <TopSellingItems/>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <BarChart />
      </div>
      <div>
        <TopLevelDonutCharts/>
      </div>
    </div>
    <div className="p-6 space-y-6">
    {/* 다른 섹션들 */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <NewCustomers />
      <RealtimeWorkStatus />
    </div>
  </div>
    
    <div>
      
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
