import ContentPanel from '../components/ContentPanel';
import { useLocation, useParams } from 'react-router-dom';
import EventCard from '../components/EventCard';
import React, { useState, useEffect , useReducer} from 'react';
import { getInfoOfEvent, getHistoricalEventFromCountry } from '../services/Sparql';
import LoadingPage from './LoadingPage';

function ContentPage() {
  const [data, setData] = useState({});
  const [evtBefore, setEvtBefore] = useState({});
  const [evtAfter, setEvtAfter] = useState({});
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const { eventkey, event } = location.state;
  
  useEffect(() => {

    const fetchData = async () => {
      setLoading(true)
      const result = await getInfoOfEvent(event[eventkey].id);
      const resultBefore = await getHistoricalEventFromCountry(event[eventkey].countryId, result[eventkey].start, "before");
      const resultAfter = await getHistoricalEventFromCountry(event[eventkey].countryId, result[eventkey].end, "after");

      setEvtBefore(resultBefore);
      setEvtAfter(resultAfter);
      setData(result);
      setLoading(false);
    };
    fetchData();
  }, [location]);

  if (eventkey in data) {
    const eventKeysBefore = Object.keys(evtBefore);
    const eventKeysAfter = Object.keys(evtAfter);
    return (
      <div className="relative bgImage grid grid-cols-10 grid-rows-10 h-screen">
        <div className='flex col-span-2 row-span-10 pr-8 pl-8'>
          <div className='flex justify-center flex-col space-y-10 w-full h-full w-2/8'>
            <div className='h-1/4'>
              <EventCard eventkey={eventKeysBefore[0]} event={evtBefore} />
              <button/>
            </div>
            <div className='h-1/4'>
              <EventCard eventkey={eventKeysBefore[1]} event={evtBefore} />
            </div>
            <div className='h-1/4'>
              <EventCard eventkey={eventKeysBefore[2]} event={evtBefore} />
            </div>
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
        <div class="row-start-2 col-start-3 row-span-9 col-span-6 overflow-hidden p-8">
          <ContentPanel title={eventkey} event={data} />
        </div>
        <div className='flex col-start-9 col-span-2 row-span-10 pr-8 pl-8'>
          <div className='flex justify-center flex-col space-y-10 w-full h-full w-2/8'>
            <div className='h-1/4'>
              <EventCard eventkey={eventKeysAfter[0]} event={evtAfter} />
            </div>
            <div className='h-1/4'>
              <EventCard eventkey={eventKeysAfter[1]} event={evtAfter} />
            </div>
            <div className='h-1/4'>
              <EventCard eventkey={eventKeysAfter[2]} event={evtAfter} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <LoadingPage/>;
  }
}

export default ContentPage;
