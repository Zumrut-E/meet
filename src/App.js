import EventList from './components/EventList';
import CitySearch from './components/CitySearch';
import NumberOfEvents from './components/NumberOfEvents';
import { useEffect, useState } from 'react';
import { extractLocations, getEvents } from './api';
import './App.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
   const [currentCity, setCurrentCity] = useState("See all cities");

  // Function to fetch event data
  const fetchData = async () => {
  try {
    const allEvents = await getEvents();
     console.log(allEvents); // Check the fetched data
    if (allEvents && Array.isArray(allEvents)) {
      const filteredEvents = currentCity === "See all cities" ? 
        allEvents : 
        allEvents.filter(event => event.location === currentCity);

      // Ensure filteredEvents is an array before using slice
      setEvents(filteredEvents.slice(0, currentNOE));
      setAllLocations(extractLocations(allEvents));
    } else {
      console.error('Expected an array of events but got:', allEvents);
    }
  } catch (error) {
    console.error("Error fetching events:", error);
  }
};

  // Fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, [currentCity]); // Re-fetch data when currentNOE changes

return (
  <div className="App">
    <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity}/>
    <NumberOfEvents setCurrentNOE={setCurrentNOE}/>
    {events.length === 0 ? (
      <p>Loading events...</p>
    ) : (
      <EventList events={events} />
    )}
  </div>
);
};

export default App;
