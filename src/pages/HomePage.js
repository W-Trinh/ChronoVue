import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import EventCard from '../components/EventCard';
import * as sparql from '../services/Sparql';
import * as dataTreatment from '../services/dataTreatment';
import '../App.css'; 

function HomePage() {
    const [allEvents, setAllEvents] = useState([]);
    const [randEvents, setRandEvents] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchEvents() {
            const event = await sparql.getCountries();
            setAllEvents(event);
            setRandEvents(dataTreatment.getRandomHistoricalEvents(event));
            setLoading(false);
        }

        fetchEvents();
    }, []);

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
                                title={eventKeys[0]} 
                                content={randEvents[eventKeys[0]].abstract} 
                                image={randEvents[eventKeys[0]].image}
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
                                    title={eventKeys[1]} 
                                    content={randEvents[eventKeys[1]].abstract} 
                                    image={randEvents[eventKeys[1]].image}
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
                                    title={eventKeys[2]} 
                                    content={randEvents[eventKeys[2]].abstract} 
                                    image={randEvents[eventKeys[2]].image}
                                />
                            </div>
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </div>

            <TransitionGroup className="size-1/3 p-4">
                {eventKeys[3] && (
                    <CSSTransition key={eventKeys[3]} timeout={500} classNames="fade">
                        <div className="h-full w-full">
                            <EventCard 
                                title={eventKeys[3]} 
                                content={randEvents[eventKeys[3]].abstract} 
                                image={randEvents[eventKeys[3]].image}
                            />
                        </div>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
}

export default HomePage;
