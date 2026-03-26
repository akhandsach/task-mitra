import React, { useState } from 'react';
import { CATEGORIES } from '../data/categories';
import { CheckCircle2, ArrowRight, ArrowLeft, UploadCloud } from 'lucide-react';
import './RegisterPro.css';

const RegisterPro = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="register-page bg-slate-50">
      <div className="container py-20 flex justify-center">
        <div className="register-card card w-full max-w-2xl p-10">
          
          <div className="register-header text-center mb-10">
            <h1 className="text-3xl font-bold mb-2">Become a TaskMitra</h1>
            <p className="text-slate-500">Step {step} of 3: {step === 1 ? 'Personal Details' : step === 2 ? 'Your Skills' : 'Identity Verification'}</p>
          </div>

          <div className="register-progress flex gap-2 mb-10">
            <div className={`h-2 flex-1 rounded-full ${step >= 1 ? 'bg-primary' : 'bg-slate-200'}`}></div>
            <div className={`h-2 flex-1 rounded-full ${step >= 2 ? 'bg-primary' : 'bg-slate-200'}`}></div>
            <div className={`h-2 flex-1 rounded-full ${step >= 3 ? 'bg-primary' : 'bg-slate-200'}`}></div>
          </div>

          <div className="register-form">
            {step === 1 && (
              <div className="step-1 animate-fade-in">
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="form-group">
                    <label className="form-label">First Name</label>
                    <input type="text" className="form-input" placeholder="Anil" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-input" placeholder="Kumar" />
                  </div>
                </div>
                <div className="form-group mb-6">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-input" placeholder="anil@example.com" />
                </div>
                <div className="form-group mb-6">
                  <label className="form-label">Phone Number</label>
                  <input type="tel" className="form-input" placeholder="+91 XXXXX XXXXX" />
                </div>
                <div className="form-group mb-6">
                  <label className="form-label">City</label>
                  <input type="text" className="form-input" placeholder="Bengaluru" />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="step-2 animate-fade-in">
                <h3 className="text-xl font-bold mb-4">What services do you provide?</h3>
                <p className="text-slate-500 mb-6">Select all the categories you are qualified to perform. You can add more later.</p>
                <div className="skills-grid">
                  {CATEGORIES.slice(0, 12).map(cat => (
                    <label key={cat.id} className="skill-label border border-slate-200 rounded-md p-4 flex gap-3 cursor-pointer hover:border-primary transition">
                      <input type="checkbox" className="mt-1 accent-primary" />
                      <div>
                        <strong className="block text-slate-900">{cat.name}</strong>
                        <span className="text-xs text-slate-500">{cat.group}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="step-3 animate-fade-in">
                <div className="bg-blue-50 border border-blue-200 p-6 rounded-md mb-8 flex gap-4 text-blue-800">
                  <CheckCircle2 className="flex-shrink-0" />
                  <p className="text-sm font-medium">TaskMitra requires government ID verification to maintain a safe, trusted marketplace.</p>
                </div>
                
                <div className="form-group mb-8">
                  <label className="form-label">Aadhaar or PAN Card Upload</label>
                  <div className="upload-box border-2 border-dashed border-slate-300 rounded-md p-10 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-slate-50 transition">
                    <UploadCloud size={40} className="text-slate-400 mb-4" />
                    <p className="font-semibold text-slate-900">Click to upload or drag and drop</p>
                    <p className="text-xs text-slate-500 mt-1">SVG, PNG, JPG or PDF (max. 5MB)</p>
                  </div>
                </div>

                <label className="flex gap-3 text-sm text-slate-700 cursor-pointer">
                  <input type="checkbox" className="mt-1 accent-primary" />
                  I agree to a background check and agree to the Terms of Service.
                </label>
              </div>
            )}
          </div>

          <div className="register-actions flex justify-between mt-10 pt-6 border-t border-slate-200">
            <button 
              className="btn-secondary" 
              onClick={() => setStep(s => Math.max(1, s - 1))}
              disabled={step === 1}
              style={{ opacity: step === 1 ? 0.3 : 1 }}
            >
              <ArrowLeft size={18} /> Back
            </button>
            <button 
              className="btn-primary"
              onClick={() => setStep(s => Math.min(3, s + 1))}
            >
              {step === 3 ? 'Submit Application' : 'Continue'} <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
export default RegisterPro;
