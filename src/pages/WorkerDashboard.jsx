import React, { useState } from 'react';
import { List, Calendar, DollarSign, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const WorkerDashboard = () => {
  const [activeTab, setActiveTab] = useState('board');

  return (
    <div className="dashboard-page bg-slate-50" style={{ minHeight: 'calc(100vh - 70px)' }}>
      <div className="container py-10">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold">Pro Dashboard</h1>
          <div className="flex items-center gap-4">
             <span className="font-bold text-slate-700">Anil Kumar</span>
             <img src="https://i.pravatar.cc/150?u=1" className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" alt="profile"/>
          </div>
        </div>

        <div className="flex gap-10 lg:flex-row flex-col">
          {/* Sidebar */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="card overflow-hidden">
              <button className={`w-full text-left px-6 py-4 border-b border-slate-200 flex items-center gap-3 font-medium transition ${activeTab === 'board' ? 'bg-slate-900 text-white' : 'hover:bg-slate-50 text-slate-700'}`} onClick={() => setActiveTab('board')}>
                <List size={18}/> Task Board
              </button>
              <button className={`w-full text-left px-6 py-4 border-b border-slate-200 flex items-center gap-3 font-medium transition ${activeTab === 'schedule' ? 'bg-slate-900 text-white' : 'hover:bg-slate-50 text-slate-700'}`} onClick={() => setActiveTab('schedule')}>
                <Calendar size={18}/> My Schedule
              </button>
              <button className={`w-full text-left px-6 py-4 flex items-center gap-3 font-medium transition ${activeTab === 'earnings' ? 'bg-slate-900 text-white' : 'hover:bg-slate-50 text-slate-700'}`} onClick={() => setActiveTab('earnings')}>
                <DollarSign size={18}/> Earnings
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'board' && (
              <div className="animate-fade-in">
                <div className="flex justify-between items-end mb-6">
                   <div>
                     <h2 className="text-xl font-bold">Available Tasks Near You</h2>
                     <p className="text-sm text-slate-500">Matching your skills: Plumbing, General Repairs</p>
                   </div>
                   <span className="text-sm font-bold text-primary">Live Updates On</span>
                </div>

                <div className="card p-6 mb-4 border-l-4 border-l-primary hover:shadow-md transition">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold mb-1">Install new water heater</h3>
                      <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                        <span className="flex items-center gap-1"><MapPin size={14}/> Indiranagar (4km away)</span>
                        <span>Today, Flexible Time</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-bold text-slate-900">₹800</span>
                      <p className="text-xs text-slate-500 text-right">Fixed Price</p>
                    </div>
                  </div>
                  <div className="flex gap-4 border-t border-slate-100 pt-4 mt-2">
                    <button className="btn-primary text-sm flex-1">Accept Task</button>
                    <button className="btn-secondary text-sm flex-1">Decline</button>
                  </div>
                </div>

                <div className="card p-6 mb-4 border-l-4 border-l-primary hover:shadow-md transition">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold mb-1">Fix kitchen sink clog</h3>
                      <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                        <span className="flex items-center gap-1"><MapPin size={14}/> Koramangala (6.2km away)</span>
                        <span className="text-red-600 font-bold">Urgent (Next 2 hrs)</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-bold text-slate-900">₹400/hr</span>
                      <p className="text-xs text-slate-500 text-right">Est. 1-2 hrs</p>
                    </div>
                  </div>
                  <div className="flex gap-4 border-t border-slate-100 pt-4 mt-2">
                    <button className="btn-primary text-sm flex-1">Accept Task</button>
                    <button className="btn-secondary text-sm flex-1">Decline</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerDashboard;
