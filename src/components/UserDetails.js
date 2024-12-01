import React from "react";
import "./style.css";

const UserDetails = () => {
  return (
    <div className="user-details">
      <div className="user-header">
        <div className="user-avatar">CB</div>
        <div className="user-info">
          <h3 className="user-name">Hannibal Smith</h3>
          <p className="user-address">1 Market Street, San Francisco, CA 94105</p>
        </div>
      </div>

      <div className="user-data">
        <div className="data-row">
          <p className="label">Customer ID</p>
          <p className="value">12345</p>
        </div>
        <div className="data-row">
          <p className="label">Email</p>
          <p className="value">rachel@sample.com</p>
        </div>
        <div className="data-row">
          <p className="label">Phone Number</p>
          <p className="value">805-123-45678</p>
        </div>
        <div className="action-btn">Add</div>
      </div>

      <div className="user-stats">
        <div className="stat">
          <p className="label">Loyalty Tier</p>
          <p className="value">Silver</p>
        </div>
        <div className="stat">
          <p className="label">Segment</p>
          <p className="value">Sleepy Customer</p>
        </div>
        <div className="stat">
          <p className="label">Lifetime Value</p>
          <p className="value">$1M</p>
        </div>
        <div className="stat">
          <p className="label">Propensity to Purchase</p>
          <p className="value">75%</p>
        </div>
        <div className="action-btn">Add</div>
      </div>

      <div className="cta-buttons">
        <button className="assign-btn">Assign another Agent</button>
        <button className="widget-btn">Add New Widget</button>
      </div>
    </div>
  );
};

export default UserDetails;
