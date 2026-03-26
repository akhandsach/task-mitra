import React, { useState } from 'react';
import { Package, MessageSquare, CreditCard, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('tasks');

  return (
    <div className="dashboard-page bg-slate-50" style={{ minHeight: 'calc(100vh - 70px)' }}>
      <div className="container py-10">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold">My Account</h1>
          <Link to="/post-task" className="btn-primary">Post a New Task</Link>
        </div>

        <div className="flex gap-10 lg:flex-row flex-col">
          {/* Sidebar */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="card overflow-hidden">
              <button className={`w-full text-left px-6 py-4 border-b border-slate-200 flex items-center gap-3 font-medium transition ${activeTab === 'tasks' ? 'bg-slate-900 text-white' : 'hover:bg-slate-50 text-slate-700'}`} onClick={() => setActiveTab('tasks')}>
                <Package size={18}/> My Tasks
              </button>
              <button className={`w-full text-left px-6 py-4 border-b border-slate-200 flex items-center gap-3 font-medium transition ${activeTab === 'messages' ? 'bg-slate-900 text-white' : 'hover:bg-slate-50 text-slate-700'}`} onClick={() => setActiveTab('messages')}>
                <MessageSquare size={18}/> Messages
              </button>
              <button className={`w-full text-left px-6 py-4 flex items-center gap-3 font-medium transition ${activeTab === 'payments' ? 'bg-slate-900 text-white' : 'hover:bg-slate-50 text-slate-700'}`} onClick={() => setActiveTab('payments')}>
                <CreditCard size={18}/> Payments
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'tasks' && (
              <div className="animate-fade-in">
                <h2 className="text-xl font-bold mb-6">Active Tasks</h2>
                <div className="card p-6 mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                       <h3 className="text-lg font-bold">Fix Leaky Bathroom Tap</h3>
                       <span className="bg-blue-100 text-blue-800 px-2 py-1 text-xs font-bold rounded-sm border border-blue-200">In Progress</span>
                    </div>
                    <p className="text-sm text-slate-500 mb-2">Assigned to: <strong>Anil Kumar</strong> (Plumber)</p>
                    <p className="text-sm text-slate-500">Scheduled: Today, 4:00 PM</p>
                  </div>
                  <div className="flex gap-3">
                    <button className="btn-secondary text-sm">Message Anil</button>
                  </div>
                </div>

                <h2 className="text-xl font-bold mb-6 mt-10">Completed Tasks</h2>
                <div className="card p-6 opacity-75">
                  <div className="flex items-center gap-3 mb-2">
                     <h3 className="text-lg font-bold text-slate-700">Deep Home Cleaning</h3>
                     <span className="bg-green-100 text-green-800 px-2 py-1 text-xs font-bold rounded-sm border border-green-200 flex items-center gap-1"><CheckCircle2 size={12}/> Completed</span>
                  </div>
                  <p className="text-sm text-slate-500 mb-2">Completed on: Mar 10, 2026</p>
                  <p className="text-sm font-bold text-slate-900">Total Paid: ₹1,500</p>
                </div>
              </div>
            )}

            {activeTab === 'messages' && (
              <div className="card p-10 text-center animate-fade-in">
                <MessageSquare size={48} className="mx-auto text-slate-300 mb-4" />
                <h3 className="text-lg font-bold">No messages yet</h3>
                <p className="text-slate-500">When you book a tasker, your conversations will appear here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
