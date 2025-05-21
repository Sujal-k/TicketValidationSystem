import React from 'react';
import '../styles/addEvent.css';

const AdminAddEvent = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const eventData = Object.fromEntries(data.entries());
    console.log('Event Data:', eventData);
  };

  return (
    <div className="admin-container">
      <div className="admin-left"></div>
      <div className="admin-right">
        <form className="admin-form" onSubmit={handleSubmit}>
          <h2 className="admin-heading">Add New Event</h2>

          <label className="admin-label">Event Name:</label>
          <input className="admin-input" type="text" name="name" required />

          <label className="admin-label">Date:</label>
          <input className="admin-input" type="date" name="date" required />

          <label className="admin-label">Time:</label>
          <input className="admin-input" type="time" name="time" required />

          <label className="admin-label">Location:</label>
          <input className="admin-input" type="text" name="location" required />

          <label className="admin-label">Description:</label>
          <textarea className="admin-textarea" name="description" rows="4" required></textarea>

          <button className="admin-button" type="submit">Add Event</button>
        </form>
      </div>
    </div>
  );
};

export default AdminAddEvent;
