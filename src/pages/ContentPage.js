import BottomPanel from '../components/BottomPanel';
import ContentPanel from '../components/ContentPanel';
import SidePanel from '../components/SidePanel';
import { useLocation  } from 'react-router-dom';

  function ContentPage() {
    const location = useLocation();
    const { eventkey, event, allEvents } = location.state;


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
          <ContentPanel title={eventkey} content={event["abstract"]} image={event["image"]}/>
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

export default ContentPage;
