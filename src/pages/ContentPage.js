import ContentPanel from '../components/ContentPanel';
import { useLocation } from 'react-router-dom';
import EventCard from '../components/EventCard';
import React, { useState, useEffect } from 'react';
import { getInfoOfEvent, getHistoricalEventFromCountry } from '../services/Sparql';
import LoadingPage from './LoadingPage';
import * as dataTreatment from '../services/dataTreatment';

function ContentPage() {
  const location = useLocation();
  const { eventkey, event } = location.state;
  const [data, setData] = useState({});
  const [evtBefore, setEvtBefore] = useState({});
  const [evtAfter, setEvtAfter] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await getInfoOfEvent(event[eventkey].id);
      console.log("result", result)
      const resultBefore = dataTreatment.addDictEntry(await getHistoricalEventFromCountry(result[eventkey].countryId, result[eventkey].start, "before"));
      const resultAfter = dataTreatment.addDictEntry(await getHistoricalEventFromCountry(result[eventkey].countryId, result[eventkey].end, "after"));

      setEvtBefore(resultBefore);
      setEvtAfter(resultAfter);
      setData(result);
    };
    fetchData();
  }, []);

  if (Object.keys(data).length === 0) {
    return <LoadingPage/>;
  } else {
    const eventKeysBefore = Object.keys(evtBefore);
    const eventKeysAfter = Object.keys(evtAfter);

    return (
      <div className="relative bgImage grid grid-cols-10 grid-rows-10 h-screen">
        <div className='flex col-span-2 row-span-10 pr-8 pl-8'>
          <div className='flex justify-center flex-col space-y-10 w-full h-full w-2/8'>
            <div className='h-1/4'>
              <EventCard eventkey={eventKeysBefore[0]} event={evtBefore} />
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
                Retour au tirage
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
  }
}

export default ContentPage;
