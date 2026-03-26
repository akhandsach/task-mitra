import React, { useState } from 'react';
import { Package, Bike, MapPin, Clock, ArrowRight } from 'lucide-react';
import './GenieDelivery.css';

const GenieDelivery = () => {
  return (
    <div className="genie-page animate-fade-in">
      <div className="container">
        <div className="genie-header text-center">
          <div className="genie-icon pulse-orb">
            <Bike size={32} color="white" />
          </div>
          <h1>Genie Quick Drop</h1>
          <p className="text-muted">Like Swiggy Genie or Pronto. Need something fetched or dropped instantly? Our fleet of taskers will get it done securely.</p>
        </div>

        <div className="genie-form-container glass-panel">
          <div className="genie-form-grid">
            {/* Left Side: Delivery Details */}
            <div className="genie-details">
              <h3>Task Details</h3>
              <div className="pickup-drop-bus">
                 <div className="stop">
                    <MapPin size={24} color="#10B981" />
                    <div className="stop-info">
                      <label>Pickup From</label>
                      <input type="text" className="form-input" placeholder="Sender's exact address" />
                    </div>
                 </div>
                 <div className="connection-line"></div>
                 <div className="stop">
                    <MapPin size={24} color="#EF4444" />
                    <div className="stop-info">
                      <label>Drop To</label>
                      <input type="text" className="form-input" placeholder="Receiver's exact address" />
                    </div>
                 </div>
              </div>

              <div className="item-details mt-6">
                <label>What are we delivering?</label>
                <div className="item-types">
                  <button className="type-btn"><Package size={18}/> Documents/Keys</button>
                  <button className="type-btn active"><Package size={18}/> Clothes/Boxes</button>
                  <button className="type-btn"><Package size={18}/> Food/Grocery</button>
                </div>
              </div>
            </div>

            {/* Right Side: Estimate & Summary */}
            <div className="genie-summary">
              <div className="estimate-card">
                <h3>Estimated Fare</h3>
                <div className="price-huge title-gradient">₹ 145</div>
                <div className="eta">
                  <Clock size={16}/> Pickup in 12 mins
                </div>
                <hr className="my-4"/>
                <div className="summary-row"><span className="text-muted">Distance</span><span>8.5 km</span></div>
                <div className="summary-row"><span className="text-muted">Item Type</span><span>Clothes/Boxes</span></div>
                <button className="btn-primary w-100 mt-6" style={{width: '100%'}}>
                  Confirm Booking <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GenieDelivery;
