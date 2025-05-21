import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/welcome.css';

const WelcomePage = () => {
  const navigate = useNavigate();

  const testimonials = [
    {
      name: 'Ved',
      role: 'Backend Developer',
      feedback: "Built a smart ticket system using Node.js and geofencing.",
    },
    {
      name: 'Sujal',
      role: 'Frontend Developer',
      feedback: 'Seamless React interface and real-time validation features.',
    },
    {
      name: 'Dhruv',
      role: 'Project Manager',
      feedback: 'Everything is streamlined — great teamwork!',
    },
    {
      name: 'Suhani',
      role: 'UX Designer',
      feedback: 'User-friendly design with dark theme and BookMyShow vibes.',
    },
  ];

  const handleStartClick = () => {
    navigate('/user/login');
  };

  return (
    <div className="app-container">
      {/* NavBar */}
      <nav className="navbar"> 
        <div className="logo"> Genius</div>
        <button className="get-started-btn" onClick={() => navigate('/user/login')}>Get Started</button>
      </nav>

      <header className="header">
        <h1>
          The Automated Ticket Validation System 
        </h1>
        <p>Streamline your event entry with seamless ticket verification.</p>
        <button className="start-button" onClick={handleStartClick}>Start Validating Tickets Now</button>
        <p className="note">Quick and reliable way to validate tickets.</p>

        {/* Rotating tagline */}
        <div className="tagline">
          <div className="rotating-text">
            <span>Using Geofence Technology</span>
            <span>Quick Ticket Validation</span>
            <span>Real-Time Event Access</span>
            <span>Secure & Reliable System</span>
          </div>
        </div>
      </header>

      <section className="testimonials">
        <h2>Team Highlights</h2>
        <div className="testimonial-cards">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <h3>{testimonial.name}</h3>
              <h4>{testimonial.role}</h4>
              <p>{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WelcomePage;
