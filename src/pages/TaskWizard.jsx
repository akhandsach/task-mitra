import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle, Search, MapPin, Calendar, CreditCard } from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import './TaskWizard.css';

const TaskWizard = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ category: '', description: '', location: '', budget: '' });

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const STEPS = [
    { title: 'Task Details', icon: <Search size={20} /> },
    { title: 'Location', icon: <MapPin size={20} /> },
    { title: 'Schedule', icon: <Calendar size={20} /> },
    { title: 'Budget', icon: <CreditCard size={20} /> }
  ];

  return (
    <div className="wizard-page">
      <div className="container wizard-container">
        {/* Progress Sidebar */}
        <div className="wizard-progress">
          <h3 className="text-xl mb-6">Post a Task</h3>
          <ul className="step-list">
            {STEPS.map((s, index) => (
              <li key={index} className={`step-item ${step === index + 1 ? 'active' : ''} ${step > index + 1 ? 'completed' : ''}`}>
                <div className="step-icon">
                  {step > index + 1 ? <CheckCircle size={20} /> : s.icon}
                </div>
                <span>{s.title}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Wizard Form Area */}
        <div className="wizard-form card">
          {step === 1 && (
            <div className="step-content">
              <h2>What do you need help with?</h2>
              <div className="form-group mt-6">
                <label className="form-label">Select Category</label>
                <select className="form-input" value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})}>
                  <option value="">Choose a specialized service</option>
                  {CATEGORIES.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Describe the task in detail</label>
                <textarea 
                  className="form-input" 
                  rows="5" 
                  placeholder="E.g., I need a leaky faucet fixed in the kitchen and the bathroom sink pipe replaced."
                  value={formData.description}
                  onChange={e => setFormData({...formData, description: e.target.value})}
                ></textarea>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="step-content">
              <h2>Where is the task located?</h2>
              <div className="form-group mt-6">
                <label className="form-label">Full Address</label>
                <div className="input-with-icon">
                  <MapPin size={20} className="input-icon" />
                  <input type="text" className="form-input" placeholder="Enter your home or office address in India" />
                </div>
              </div>
              <div className="map-placeholder">
                <div className="pulse-primary"></div>
                <p>Pinpoint your exact location</p>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="step-content">
              <h2>When do you need it done?</h2>
              <div className="schedule-options mt-6">
                <div className="schedule-card active">
                  <h4>Flexible Range</h4>
                  <p>In the next few days</p>
                </div>
                <div className="schedule-card">
                  <h4>Specific Time</h4>
                  <p>I have a fixed schedule</p>
                </div>
                <div className="schedule-card urgent">
                  <h4>Urgent</h4>
                  <p>Need it today!</p>
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="step-content">
              <h2>What's your budget?</h2>
              <p className="text-slate-500 mb-6">You can choose to pay by the hour or set a fixed price. Pros will negotiate.</p>
              <div className="budget-type">
                <button className="budget-btn active">Hourly Rate (₹)</button>
                <button className="budget-btn">Fixed Price (₹)</button>
              </div>
              <div className="form-group">
                <label className="form-label">Estimated Budget (₹)</label>
                <input type="number" className="form-input text-2xl font-bold py-4" placeholder="E.g., 500" />
              </div>
            </div>
          )}

          {/* Controls */}
          <div className="wizard-controls">
            <button className="btn-secondary" onClick={prevStep} disabled={step === 1}>
              <ArrowLeft size={18} /> Back
            </button>
            <button className="btn-primary" onClick={nextStep}>
              {step === 4 ? 'Post Task Now' : 'Continue'} <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TaskWizard;
