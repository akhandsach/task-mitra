import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, MessageCircle, Phone, ShieldCheck, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="container footer-grid">
        {/* Brand & Mission */}
        <div className="footer-brand-section">
          <Link to="/" className="nav-brand">
            <div className="logo-icon">TM</div>
            <span className="logo-text title-gradient">TaskMitra</span>
          </Link>
          <p className="footer-mission">
            Empowering every Indian with reliable, open, and trusted local services. Our mission is to build the ultimate hyper-local marketplace for Bharat.
          </p>
          <div className="trust-badges">
            <div className="badge">
              <ShieldCheck size={20} color="var(--emerald-success)" />
              <span>Verified Pros</span>
            </div>
            <div className="badge">
              <Heart size={20} color="#FF3366" />
              <span>Trusted by 1M+</span>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h4>For Customers</h4>
          <ul>
            <li><Link to="/search">Find a Professional</Link></li>
            <li><Link to="/post-task">Post a Task</Link></li>
            <li><Link to="/genie">Genie Quick Drop</Link></li>
            <li><Link to="/how-it-works">How it Works</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>For Partners</h4>
          <ul>
            <li><Link to="/register-pro">Become a TaskMitra</Link></li>
            <li><Link to="/business">Business Solutions</Link></li>
            <li><Link to="/advertising">Advertise with Us</Link></li>
            <li><Link to="/success-stories">Success Stories</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div className="footer-links">
          <h4>Connect</h4>
          <div className="social-icons">
            <a href="#"><Globe size={24} /></a>
            <a href="#"><MessageCircle size={24} /></a>
            <a href="#"><Mail size={24} /></a>
            <a href="#"><Phone size={24} /></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container bottom-content">
          <p>&copy; {new Date().getFullYear()} TaskMitra India. All rights reserved.</p>
          <div className="bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
