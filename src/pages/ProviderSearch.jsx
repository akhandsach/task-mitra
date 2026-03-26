import React, { useState } from 'react';
import { Search, Star, ShieldCheck, MapPin, Filter } from 'lucide-react';
import './ProviderSearch.css';

const MOCK_PROVIDERS = [
  { id: 1, name: 'Anil Kumar', role: 'Plumbing & Repairs', rating: 4.9, reviews: 152, price: '₹400/hr', verified: true, img: 'https://i.pravatar.cc/150?u=1' },
  { id: 2, name: 'Priya Sharma', role: 'Home Cleaning Specialist', rating: 4.8, reviews: 89, price: '₹300/hr', verified: true, img: 'https://i.pravatar.cc/150?u=2' },
  { id: 3, name: 'Rahul Tech Services', role: 'Electrician & Appliances', rating: 4.7, reviews: 204, price: '₹500/hr', verified: false, img: 'https://i.pravatar.cc/150?u=3' },
  { id: 4, name: 'Vijay Handyman', role: 'General Tasks & Fixes', rating: 5.0, reviews: 42, price: '₹350/hr', verified: true, img: 'https://i.pravatar.cc/150?u=4' }
];

const ProviderSearch = () => {
  return (
    <div className="search-page">
      {/* Search Header */}
      <div className="search-header bg-white border-b">
        <div className="container header-container">
          <div className="search-title">
            <h1>Hire a Professional</h1>
            <p className="text-slate-500">Compare top-rated local pros and hire the best fit for your job.</p>
          </div>
          <div className="search-inputs card">
            <div className="input-group">
              <Search size={18} className="text-slate-500"/>
              <input type="text" placeholder="Service needed?" />
            </div>
            <div className="input-group">
              <MapPin size={18} className="text-slate-500"/>
              <input type="text" defaultValue="Bengaluru" />
            </div>
            <button className="btn-primary search-action-btn">Search</button>
          </div>
        </div>
      </div>

      <div className="container search-body mt-8 p-b-80">
        {/* Filters Sidebar */}
        <div className="search-filters">
          <div className="filter-header">
            <h3 className="font-semibold text-lg">Filters</h3>
            <Filter size={18} />
          </div>
          
          <div className="filter-section">
            <h4 className="font-medium mb-3">Rate (Hourly or Fixed)</h4>
            <div className="price-slider">
              <span>₹100</span> - <span>₹2000+</span>
            </div>
          </div>

          <div className="filter-section">
            <h4 className="font-medium mb-3">Trust & Safety</h4>
            <label className="checkbox-label">
              <input type="checkbox" defaultChecked /> TaskMitra Verified
            </label>
            <label className="checkbox-label">
              <input type="checkbox" /> Elite Pros (4.8+ Stars)
            </label>
            <label className="checkbox-label">
              <input type="checkbox" /> Background Checked
            </label>
          </div>
        </div>

        {/* Results */}
        <div className="search-results">
          {MOCK_PROVIDERS.map(pro => (
            <div key={pro.id} className="pro-card card flex gap-6 p-6">
              <div className="pro-avatar w-32 h-32 flex-shrink-0">
                <img src={pro.img} alt={pro.name} className="w-full h-full object-cover rounded-md" />
              </div>
              <div className="pro-details flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-xl font-bold">{pro.name}</h3>
                  {pro.verified && <span className="verified-badge bg-green-50 text-green-700 px-2 py-1 rounded-sm text-xs font-bold flex items-center gap-1 border border-green-200"><ShieldCheck size={14}/> Verified</span>}
                </div>
                <p className="text-slate-500 font-medium mb-3">{pro.role}</p>
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <span className="flex items-center gap-1 font-bold"><Star size={16} fill="#F59E0B" color="#F59E0B"/> {pro.rating}</span>
                  <span className="text-slate-500">({pro.reviews} reviews)</span>
                  <span className="font-bold text-slate-900 bg-slate-100 px-3 py-1 rounded-full">{pro.price}</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">A reliable professional offering high quality services. I bring my own tools and leave the space perfectly clean.</p>
              </div>
              <div className="pro-actions w-40 flex flex-col gap-3 justify-center">
                <button className="btn-secondary w-full">View Profile</button>
                <button className="btn-primary w-full">Hire Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProviderSearch;
