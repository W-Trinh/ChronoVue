import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ContentPanel from '../components/ContentPanel';
import EventCard from '../components/EventCard';
import { getInfoOfEvent, getHistoricalEventFromCountry } from '../services/Sparql';
import LoadingPage from './LoadingPage';

function ContentPage() {
  // State variables
  const [data, setData] = useState({});
  const [evtBefore, setEvtBefore] = useState({});
  const [evtAfter, setEvtAfter] = useState({});
  const [loading, setLoading] = useState(true);

  // Get event data from the location state
  const location = useLocation();
  const { eventkey, event } = location.state;

  // Fetch data from APIs when component mounts or location changes
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch event details
        const result = await getInfoOfEvent(event[eventkey].id);
        // Fetch historical events before the current event
        const resultBefore = await getHistoricalEventFromCountry(event[eventkey].countryId, result[eventkey].start, "before");
        // Fetch historical events after the current event
        const resultAfter = await getHistoricalEventFromCountry(event[eventkey].countryId, result[eventkey].end, "after");

        // Update state variables with fetched data
        setEvtBefore(resultBefore);
        setEvtAfter(resultAfter);
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [location]);

  // Render loading page while data is being fetched
  if (loading) {
    return <LoadingPage />;
  }

  // Render content after data is fetched
  return (
    <div className="relative bgImage grid grid-cols-10 grid-rows-10 h-screen">
      <div className='flex col-span-2 row-span-10 pr-8 pl-8'>
        <div className='flex justify-center flex-col space-y-10 w-full h-full w-2/8'>
          {/* Render event cards for historical events before the current event */}
          {Object.keys(evtBefore).slice(0, 3).map((key) => (
            <div key={key} className='h-1/4'>
              <EventCard eventkey={key} event={evtBefore} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex col-span-6 w-full justify-center items-center pt-8">
        <div className="w-1/2">
          <a href="/">
            <button className="button-27" role="button">
              Start again
            </button>
          </a>
        </div>
      </div>

      <div className="row-start-2 col-start-3 row-span-9 col-span-6 overflow-hidden p-8">
        {/* Render content panel for the current event */}
        <ContentPanel title={eventkey} event={data} />
      </div>

      <div className='flex col-start-9 col-span-2 row-span-10 pr-8 pl-8'>
        <div className='flex justify-center flex-col space-y-10 w-full h-full w-2/8'>
          {/* Render event cards for historical events after the current event */}
          {Object.keys(evtAfter).slice(0, 3).map((key) => (
            <div key={key} className='h-1/4'>
              <EventCard eventkey={key} event={evtAfter} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContentPage;
