import React, { useState } from 'react';

const NumberOfEvents = ({ updateEventCount }) => {
  const [eventCount, setEventCount] = useState(32);

  const handleChange = (event) => {
    const value = event.target.value;
    if (value >= 1 && value <= 50) {
      setEventCount(value);
      updateEventCount(value); // Calls the parent's update function
    }
  };

  return (
    <div id="number-of-events">
      <label htmlFor="event-count">Number of events:</label>
      <input
        type="number"
        id="event-count"
        value={eventCount}
        onChange={handleChange}
        role="textbox"
        aria-label="number of events"
      />
    </div>
  );
};

export default NumberOfEvents;