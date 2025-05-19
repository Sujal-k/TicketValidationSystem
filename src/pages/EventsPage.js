import React from 'react';
import '../styles/events.css';
import { UserNavbar } from '../components/UserNavbar';


const eventsData = [
  { id: 1, category: 'Movie', title: 'Avengers: Endgame', date: '2025-06-15', description: 'Marvel superheroes unite to fight Thanos.' },
  { id: 2, category: 'Concert', title: 'Arijit Singh Live', date: '2025-07-10', description: 'Experience the soulful music of Arijit Singh.' },
  { id: 3, category: 'Theatre', title: 'Phantom of the Opera', date: '2025-08-05', description: 'A legendary musical performance.' },
  { id: 4, category: 'Movie', title: 'Inception', date: '2025-06-20', description: 'Mind-bending thriller by Christopher Nolan.' },
  { id: 5, category: 'Concert', title: 'Coldplay World Tour', date: '2025-09-10', description: 'Feel the magic of Coldplay live in concert.' },
  { id: 6, category: 'Comedy', title: 'Stand-Up Night with Zakir Khan', date: '2025-07-05', description: 'Laugh out loud with India\'s top comic talent.' },
  { id: 7, category: 'Movie', title: 'Batman Begins', date: '2025-06-25', description: 'The Dark Knight Rises.' },
  { id: 8, category: 'Theatre', title: 'Hamlet', date: '2025-08-15', description: 'Classic Shakespearean drama.' },
  { id: 9, category: 'Concert', title: 'Imagine Dragons Live', date: '2025-09-25', description: 'High energy performance.' },
];


export function EventsPage() {
 
  return (
  <>
  <UserNavbar/>
    <div className="events-page">
    <div className="events-container">
      <header className="events-header">
        <h1>Explore & Book Events</h1>
        <p>Discover trending movies, concerts, and theatre shows near you</p>
      </header>
      <div className="events-grid">
        {eventsData.map((event) => (
          <div className="event-card" key={event.id}>
            <div className="event-category">{event.category}</div>
            <h3 className="event-title">{event.title}</h3>
            <p className="event-description">{event.description}</p>
            <p className="event-date"><strong>Date:</strong> {event.date}</p>
            <button className="book-button">Book Now</button>
          </div>
        ))}
      </div>
    </div>
    </div>
         </>
  );
}

export default EventsPage;
