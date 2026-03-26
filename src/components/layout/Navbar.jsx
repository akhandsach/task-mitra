import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, MapPin, Menu, UserCircle, Briefcase } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="container nav-container">
        {/* Brand */}
        <Link to="/" className="nav-brand">
          <div className="logo-icon">T</div>
          <span className="logo-text">TaskMitra</span>
        </Link>
        
        {/* Search Bar (Hidden on Wizard & Auth pages) */}
        {!['/post-task', '/register-pro'].includes(location.pathname) && (
          <div className="nav-center hidden-mobile">
            <div className="search-bar">
              <Search size={16} className="text-slate-500" />
              <input type="text" className="flex-1" placeholder="Search for services" />
              <div className="nav-divider mx-2 h-4"></div>
              <MapPin size={16} className="text-slate-500" />
              <input type="text" placeholder="Location" defaultValue="Select City" style={{width: '90px'}} />
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="nav-actions hidden-mobile">
          <Link to="/genie" className="nav-link">Genie Drop</Link>
          <div className="nav-divider"></div>
          
          <div className="flex gap-4 items-center">
             <Link to="/worker-dashboard" className="nav-link font-medium text-slate-700 flex items-center gap-1"><Briefcase size={16}/> Pro Dashboard</Link>
             <Link to="/user-dashboard" className="nav-link font-medium text-slate-700 flex items-center gap-1"><UserCircle size={16}/> My Account</Link>
          </div>
          
          <Link to="/post-task" className="btn-primary" style={{ padding: '8px 20px' }}>Post a Task</Link>
        </div>

        {/* Mobile menu toggle */}
        <button className="hidden-desktop">
          <Menu size={24} className="text-slate-900" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
