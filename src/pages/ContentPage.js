import BottomPanel from '../components/BottomPanel';
import ContentPanel from '../components/ContentPanel';
import SidePanel from '../components/SidePanel';
import { useLocation  } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { getInfoOfEvent } from '../services/Sparql';
import { set } from 'rsuite/esm/utils/dateUtils';

  function ContentPage() {
    const location = useLocation();
    const { eventkey, event, allEvents } = location.state;
    
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
        <div className="relative bgImage grid grid-cols-10 grid-rows-10 h-screen p-8">
          <div className='col-span-2 row-span-8 pr-8 pl-8'>
            <SidePanel head="Événements antérieurs" content={event["abstract"]} />
          </div>
  
          <div className="flex w-1/3 justify-center items-center">
              <div className="w-1/4">
                <a href="/">
                  <button className="button-27" role="button">
                      Roll
                  </button>
                </a>
              </div>
          </div>
          <div class="row-start-2 col-start-3 row-span-7 col-span-6 overflow-hidden">
            <ContentPanel title={eventkey} event={data}/>
          </div>
          <div className='row-start-9 col-start-1 col-span-10 row-span-2 pt-8 pr-8 pl-8'>
            <BottomPanel content={event["abstract"]} />
          </div>
          <div className='col-start-9 col-span-2 row-span-8 pr-8 pl-8'>
            <SidePanel head="Événements ultérieurs" content={event["abstract"]} />
          </div>
        </div>
      );
    }
  }

export default ContentPage;
