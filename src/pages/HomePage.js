import EventCard from '../components/EventCard';
import * as sparql from '../services/Sparql';
import * as dataTreatment from '../services/dataTreatment';

const event = await sparql.getCountries();
let randEvents = dataTreatment.getRandomHistoricalEvents(event);

function HomePage() {
    return (
        <div className="flex flex-col bgImage h-screen w-screen items-center">

        <div className="size-1/3 p-4">
            <div className="h-full w-full"><EventCard title={Object.keys(randEvents)[0]} content={randEvents[Object.keys(randEvents)[0]].abstract} image={randEvents[Object.keys(randEvents)[0]].image}/></div>
        </div>

        <div className="columns-3 w-screen h-1/3 flex items-stretch">
            <div className="w-1/3 p-4">
                <div className="h-full w-full"><EventCard title={Object.keys(randEvents)[1]} content={randEvents[Object.keys(randEvents)[1]].abstract} image={randEvents[Object.keys(randEvents)[1]].image}/></div>
            </div>
            <div className="flex w-1/3 justify-center items-center">
                <div className="w-1/4">
                    <button className="button-27" role="button">Roll</button>
                </div>
            </div>
            
            <div className="w-1/3 p-4">
                <div className="h-full w-full"><EventCard title={Object.keys(randEvents)[2]} content={randEvents[Object.keys(randEvents)[2]].abstract} image={randEvents[Object.keys(randEvents)[2]].image}/></div>
            </div>
        </div>

        <div className="size-1/3 p-4">
            <div className="h-full w-full"><EventCard title={Object.keys(randEvents)[3]} content={randEvents[Object.keys(randEvents)[3]].abstract} image={randEvents[Object.keys(randEvents)[3]].image}/></div>
        </div>

        </div>
    );
  }
  
  export default HomePage;
  