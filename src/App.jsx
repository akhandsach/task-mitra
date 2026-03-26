import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import TaskWizard from './pages/TaskWizard';
import ProviderSearch from './pages/ProviderSearch';
import GenieDelivery from './pages/GenieDelivery';
import TaskerProfile from './pages/TaskerProfile';
import RegisterPro from './pages/RegisterPro';
import UserDashboard from './pages/UserDashboard';
import WorkerDashboard from './pages/WorkerDashboard';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content" style={{ marginTop: '70px', minHeight: 'calc(100vh - 70px)' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/post-task" element={<TaskWizard />} />
            <Route path="/search" element={<ProviderSearch />} />
            <Route path="/genie" element={<GenieDelivery />} />
            <Route path="/tasker/:id" element={<TaskerProfile />} />
            
            {/* New V2 Routes */}
            <Route path="/register-pro" element={<RegisterPro />} />
            <Route path="/user-dashboard" element={<UserDashboard />} />
            <Route path="/worker-dashboard" element={<WorkerDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
