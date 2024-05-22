import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import EventCard from '../components/EventCard';
import { fetchSparqlData } from '../services/sparqlSlice';
import * as dataTreatment from '../services/dataTreatment';
import '../App.css'; 
import LoadingPage from './LoadingPage';

function HomePage() {
    const dispatch = useDispatch();
    const sparqlData = useSelector((state) => state.sparql.data);
    const loading = useSelector((state) => state.sparql.loading);
    const error = useSelector((state) => state.sparql.error);

    const [allEvents, setAllEvents] = useState([]);
    const [randEvents, setRandEvents] = useState({});

    useEffect(() => {
        if (!sparqlData) {
            dispatch(fetchSparqlData());
        }
    }, [dispatch, sparqlData]);

    useEffect(() => {
        if (sparqlData) {
            const processedEvents = sparqlData;
            setAllEvents(processedEvents);
            setRandEvents(dataTreatment.getRandomHistoricalEvents(processedEvents));
        }
    }, [sparqlData]);

    const handleRollClick = () => {
        setRandEvents(dataTreatment.getRandomHistoricalEvents(allEvents));
    };

    if (loading) {
        return <LoadingPage/>;
    }

    if (error) {
        return <div>Error: {error}</div>;
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
                                event={allEvents}
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
                                    event={allEvents}
                                />
                            </div>
                        </CSSTransition>
                    )}
                </TransitionGroup>
                
                <div className="flex w-1/3 justify-center items-center ">
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
                                    event={allEvents}
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
                                eventkey={eventKeys[3]}
                                event={allEvents}
                            />
                        </div>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
}

export default HomePage;