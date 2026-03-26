import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, CheckCircle2 } from 'lucide-react';
import { CATEGORIES, GROUP_LIST } from '../data/categories';
import './HomePage.css';

const HomePage = () => {
  const [activeGroup, setActiveGroup] = useState('Home Tasks');
  
  const filteredCategories = CATEGORIES.filter(c => c.group === activeGroup);

  return (
    <div className="home-page animate-fade-in">
      {/* Corporate Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title text-slate-900">
              Find help for your everyday tasks
            </h1>
            <p className="hero-subtitle text-slate-700">
              TaskMitra connects you with trusted, rigorously vetted local professionals for tasks, repairs, and business services across India.
            </p>
            
            <div className="hero-search-box card">
               <div className="search-input-group">
                 <Search size={20} className="text-slate-500" />
                 <input type="text" placeholder="What do you need help with?" />
               </div>
               <div className="divider-vertical"></div>
               <div className="search-input-group location-group">
                 <MapPin size={20} className="text-slate-500" />
                 <input type="text" defaultValue="Bengaluru" />
               </div>
               <button className="btn-primary search-btn-large">Get Help</button>
            </div>
            
            <div className="hero-trust-indicators mt-6">
               <span><CheckCircle2 size={16} className="text-primary"/> Vetted Professionals</span>
               <span><CheckCircle2 size={16} className="text-primary"/> Transparent Pricing</span>
               <span><CheckCircle2 size={16} className="text-primary"/> TaskMitra Guarantee</span>
            </div>
          </div>
          
          <div className="hero-illustration">
             <div className="hero-image-placeholder">
               <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop" alt="Professional Cleaner" />
             </div>
          </div>
        </div>
      </section>

      {/* Massive Categories Section */}
      <section className="categories-section bg-slate-50">
        <div className="container">
          <div className="section-header text-center">
            <h2>Explore millions of offerings</h2>
            <p className="text-slate-500 mt-2">Browse professionals by category</p>
          </div>
          
          <div className="category-tabs mt-6">
            {GROUP_LIST.map(group => (
              <button 
                key={group} 
                className={`tab-btn ${activeGroup === group ? 'active' : ''}`}
                onClick={() => setActiveGroup(group)}
              >
                {group}
              </button>
            ))}
          </div>
          
          <div className="grid-cols-4 category-grid mt-6">
            {filteredCategories.map((cat) => (
              <Link to={`/search?category=${cat.id}`} key={cat.id} className="category-card card">
                <div className="cat-icon-wrap">
                  {cat.icon}
                </div>
                <div className="cat-details">
                  <h3>{cat.name}</h3>
                  <p>{cat.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Call to Action - Worker Auth */}
      <section className="worker-banner-section">
        <div className="container">
          <div className="worker-banner card">
            <div className="banner-content">
               <h2>Be your own boss.</h2>
               <p className="text-slate-700 mt-4 mb-6">Earn money on your own schedule. Join the TaskMitra professional network today and get access to thousands of clients.</p>
               <Link to="/register-pro" className="btn-primary">Become a Tasker</Link>
            </div>
            <div className="banner-image">
               <img src="https://images.unsplash.com/photo-1542044896530-05d85be9b11a?q=80&w=800&auto=format&fit=crop" alt="Worker Smiling" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
