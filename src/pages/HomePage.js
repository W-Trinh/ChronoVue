import EventCard from '../components/EventCard';


<<<<<<< Updated upstream
function HomePage() {
    return (
        <div className="flex flex-col bgImage h-screen w-screen items-center">

        <div className="size-1/3 p-4">
            <div className="h-full w-full"><EventCard/></div>
        </div>

        <div className="columns-3 w-screen h-1/3 flex items-stretch">
            <div className="w-1/3 p-4">
                <div className="h-full w-full"><EventCard/></div>
=======
function HomePage({ events }) { // Assurez-vous de bien déstructurer les props ici
    const [allEvents, setAllEvents] = useState([]);
    const [randEvents, setRandEvents] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchEvents() {
            try {
                if (!events || Object.keys(events).length === 0) {
                    const event = await sparql.getCountries();
                    const processedEvents = dataTreatment.reorganizeData(event);
                    setAllEvents(processedEvents);
                    setRandEvents(dataTreatment.getRandomHistoricalEvents(processedEvents));
                } else {
                    setAllEvents(events);
                    setRandEvents(dataTreatment.getRandomHistoricalEvents(events));
                }
            } catch (error) {
                console.error("Error fetching events:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchEvents();
    }, [events]);

    const handleRollClick = () => {
        setRandEvents(dataTreatment.getRandomHistoricalEvents(allEvents));
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    const eventKeys = Object.keys(randEvents);
    return (
        <div className="flex flex-col bgImage h-screen w-screen items-center">
            <TransitionGroup className="size-1/3 p-4">
                {eventKeys[0] && (
                    <CSSTransition key={eventKeys[0]} timeout={500} classNames="fade">
                        <div className="h-full w-full">
                            <EventCard 
                                eventkey={eventKeys[0]}
                                event={randEvents[eventKeys[0]]}
                                allEvents={allEvents}
                            />
                        </div>
                    </CSSTransition>
                )}
            </TransitionGroup>

            <div className="columns-3 w-screen h-1/3 flex items-stretch">
                <TransitionGroup className="w-1/3 p-4">
                    {eventKeys[1] && (
                        <CSSTransition key={eventKeys[1]} timeout={500} classNames="fade">
                            <div className="h-full w-full">
                                <EventCard 
                                    eventkey={eventKeys[1]}
                                    event={randEvents[eventKeys[1]]}
                                    allEvents={allEvents}
                                />
                            </div>
                        </CSSTransition>
                    )}
                </TransitionGroup>
                
                <div className="flex w-1/3 justify-center items-center">
                    <div className="w-1/4">
                        <button className="button-27" role="button" onClick={handleRollClick}>
                            Roll
                        </button>
                    </div>
                </div>
                
                <TransitionGroup className="w-1/3 p-4">
                    {eventKeys[2] && (
                        <CSSTransition key={eventKeys[2]} timeout={500} classNames="fade">
                            <div className="h-full w-full">
                                <EventCard 
                                    eventkey={eventKeys[2]}
                                    event={randEvents[eventKeys[2]]}
                                    allEvents={allEvents}
                                />
                            </div>
                        </CSSTransition>
                    )}
                </TransitionGroup>
>>>>>>> Stashed changes
            </div>
            <div className="flex w-1/3 justify-center items-center">
                <div className="w-1/4">
                    <button class="button-27" role="button">Roll</button>
                </div>
            </div>
            
            <div className="w-1/3 p-4">
                <div className="h-full w-full"><EventCard/></div>
            </div>
        </div>

        <div className="size-1/3 p-4">
            <div className="h-full w-full"><EventCard/></div>
        </div>

<<<<<<< Updated upstream
=======
            <TransitionGroup className="size-1/3 p-4">
                {eventKeys[3] && (
                    <CSSTransition key={eventKeys[3]} timeout={500} classNames="fade">
                        <div className="h-full w-full">
                            <EventCard 
                                eventkey={eventKeys[3]}
                                event={randEvents[eventKeys[3]]}
                                allEvents={allEvents}
                            />
                        </div>
                    </CSSTransition>
                )}
            </TransitionGroup>
>>>>>>> Stashed changes
        </div>
    );
  }
  
  export default HomePage;
  