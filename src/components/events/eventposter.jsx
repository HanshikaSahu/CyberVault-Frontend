import React, { useEffect, useState } from 'react';
import './eventposter.css';


// Mock fetchLiveEvent function to simulate fetching data
// Replace this with your actual API function from './services/api'
const fetchLiveEvent = async () => {
  const response = await fetch('/assets/data/liveEvent.json');
  if (!response.ok) {
    throw new Error('Failed to fetch event data');
  }
  return await response.json();
};

const LiveEventComponent = () => {
  const [eventData, setEventData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getEventData = async () => {
      try {
        const data = await fetchLiveEvent();
        setEventData(data);
      } catch (err) {
        setError(true);
      }
    };

    getEventData();
  }, []);

  if (error) {
    return (
        <div className="eventContainer">
          <div className="liveBox">LIVE</div>
          <p className="eventText">Events</p>
          <img src="/assets/images/cybervault2.png" alt="" className="image2" />
          <img src="/assets/images/cybervault.png" alt="" className="image1" />
        </div>
      );
  }

  if (!eventData) {
    return <p>Loading...</p>; // Optional loading state
  }

  return (
    <div className="eventContainer">
      <h1>{eventData.eventName}</h1>
      <p>{eventData.description}</p>
      <img
        src={`/assets/images/${eventData.poster}`} // Assuming the poster image is stored in the assets/images folder
        alt={eventData.eventName}
        style={{ maxWidth: '100%', borderRadius: '20px' }}
      />
    </div>
  );
};

export default LiveEventComponent;
