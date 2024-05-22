import ContentPanel from '../components/ContentPanel';
import { useLocation  } from 'react-router-dom';
import EventCard from '../components/EventCard';
import React, { useState, useEffect } from 'react';
import { getInfoOfEvent } from '../services/Sparql';


  function ContentPage() {
    const location = useLocation();
    const { eventkey, event } = location.state;
    const [data, setData] = useState({});

    useEffect(() => {
      const fetchData = async () => {
        const result = await getInfoOfEvent(event["id"])
        setData(result)
      };
      fetchData();
    }, []);

    if(Object.keys(data).length === 0){
      return <div>Loading...</div>;
    } else {
      return (
        <div className="relative bgImage grid grid-cols-10 grid-rows-10 h-screen">
          <div className='flex col-span-2 row-span-10 pr-8 pl-8'>
            <div className='flex justify-center flex-col space-y-10 w-full h-full w-2/8'>
              <div className='h-1/4'>
                <EventCard eventkey={eventkey} event={event}/>
              </div>
              <div className='h-1/4'>
                <EventCard eventkey={eventkey} event={event}/>
              </div>
              <div className='h-1/4'>
                <EventCard eventkey={eventkey} event={event}/>
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
            <ContentPanel title={eventkey} event={data}/>
          </div>
          <div className='flex col-start-9 col-span-2 row-span-10 pr-8 pl-8'>
            <div className='flex justify-center flex-col space-y-10 w-full h-full w-2/8'>
              <div className='h-1/4'>
                <EventCard eventkey={eventkey} event={event}/>
              </div>
              <div className='h-1/4'>
                <EventCard eventkey={eventkey} event={event}/>
              </div>
              <div className='h-1/4'>
                <EventCard eventkey={eventkey} event={event}/>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

export default ContentPage;
