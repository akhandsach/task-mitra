import React from 'react';
import { Star, MapPin, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';
import './TaskerProfile.css';

const TaskerProfile = () => {
  return (
    <div className="profile-page">
      <div className="profile-header-bg bg-slate-900"></div>
      
      <div className="container profile-container">
        {/* Left Col: Main Info */}
        <div className="profile-main card p-10">
          <div className="profile-top flex gap-10">
            <div className="avatar-large w-40 h-40 flex-shrink-0 border-4 border-white rounded-md overflow-hidden shadow-md bg-white -mt-20">
              <img src="https://i.pravatar.cc/300?u=1" alt="Provider" className="w-full h-full object-cover" />
            </div>
            <div className="profile-info-top mt-4 flex-1">
              <div className="flex items-center gap-4 mb-2">
                <h1 className="text-3xl font-bold">Anil Kumar</h1>
                <span className="bg-green-50 text-green-700 px-3 py-1 rounded-sm text-sm font-bold flex items-center gap-1 border border-green-200"><ShieldCheck size={16}/> Verified Pro</span>
              </div>
              <p className="text-slate-500 text-lg mb-6 font-medium">Master Plumber & Handyman</p>
              
              <div className="flex gap-8">
                <div className="flex items-center gap-3">
                  <Star size={24} fill="#F59E0B" color="#F59E0B" />
                  <div className="flex flex-col">
                    <strong className="text-lg leading-tight">4.9</strong>
                    <span className="text-sm text-slate-500">(152 reviews)</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={24} className="text-primary" />
                  <div className="flex flex-col">
                    <strong className="text-lg leading-tight">240+</strong>
                    <span className="text-sm text-slate-500">Tasks Done</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={24} className="text-slate-400" />
                  <div className="flex flex-col">
                    <strong className="text-lg leading-tight">Bengaluru</strong>
                    <span className="text-sm text-slate-500">Whitefield</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-10 border-slate-200" />
          
          <div className="about-section">
            <h2 className="text-2xl mb-4">About me</h2>
            <p className="text-slate-600 text-lg leading-relaxed">Hello! I am Anil, a certified plumber with over 10 years of experience in fixing leaks, installing new fixtures, and general home repair. I carry my own standard tools and ensure the workspace is clean before I leave. Fluent in Hindi, Kannada, and English.</p>
          </div>

          <div className="skills-section mt-10">
            <h2 className="text-2xl mb-4">Specialized Skills</h2>
            <div className="flex flex-wrap gap-3">
              <span className="bg-slate-50 border border-slate-200 px-4 py-2 rounded-full text-sm font-medium">Pipe Leak Repair</span>
              <span className="bg-slate-50 border border-slate-200 px-4 py-2 rounded-full text-sm font-medium">Water Heater Fixes</span>
              <span className="bg-slate-50 border border-slate-200 px-4 py-2 rounded-full text-sm font-medium">Bathroom Fitting</span>
              <span className="bg-slate-50 border border-slate-200 px-4 py-2 rounded-full text-sm font-medium">Drain Cleaning</span>
            </div>
          </div>
          
          <div className="portfolio-section mt-10">
            <h2 className="text-2xl mb-4">Recent Work Portfolio</h2>
            <div className="grid-cols-3">
              <div className="h-40 rounded-md overflow-hidden"><img src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Work 1" className="w-full h-full object-cover hover:scale-105 transition duration-300" /></div>
              <div className="h-40 rounded-md overflow-hidden"><img src="https://images.unsplash.com/photo-1607519656403-f111f10bc4b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Work 2" className="w-full h-full object-cover hover:scale-105 transition duration-300" /></div>
              <div className="h-40 rounded-md overflow-hidden"><img src="https://images.unsplash.com/photo-1596443491417-768ad33a2e3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Work 3" className="w-full h-full object-cover hover:scale-105 transition duration-300" /></div>
            </div>
          </div>
        </div>

        {/* Right Col: Booking Card */}
        <div className="booking-card card p-8 sticky top-24">
          <h3 className="text-2xl mb-4 font-bold">Hire Anil</h3>
          <div className="mb-6">
            <span className="text-5xl font-extrabold text-primary">₹400</span>
            <span className="text-lg text-slate-500 font-semibold"> / hr</span>
          </div>
          
          <div className="flex flex-col gap-4 mb-8 py-6 border-y border-slate-200">
            <div className="flex items-center gap-3 text-sm text-slate-600 font-medium">
              <Clock size={18} className="text-slate-400" />
              <span>Responds in approx. 15 mins</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-600 font-medium">
              <ShieldCheck size={18} className="text-primary" />
              <span>Payment protected by TaskMitra</span>
            </div>
          </div>

          <button className="btn-primary w-full text-lg py-3">Select & Continue</button>
          
          <p className="text-center mt-4 text-slate-500 text-sm">
            You won't be charged yet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaskerProfile;
