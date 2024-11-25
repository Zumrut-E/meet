import React, { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <li>
      <div className="d-flex" style={{ textAlign: 'left'}}>
        <h2>{event.summary}</h2>
        <p>{event.location}</p>
      </div>
      <div style={{ textAlign: 'right'}}>
        <button onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
      </div>
      {showDetails && event.description && (
        <div>
          <p>{event.description}</p>
        </div>
      )}
    </li>
  );
};

export default Event;
