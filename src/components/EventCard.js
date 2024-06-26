import React from 'react';
import { useNavigate } from 'react-router-dom';

function EventCard({ eventkey, event }) {
    const navigate = useNavigate();

    // Check if event or event[eventkey] is undefined before rendering the component
    if (!event || !event[eventkey]) {
        return null; // Do not render the component if there is insufficient data
    }

    // Handle click event to navigate to the event details page
    const handleClick = (title) => {
        navigate(`/${title}`, {
            state: { eventkey, event }
        });
    };

    return (
        <div onClick={() => handleClick(event[eventkey].title)} className="flex flex-col items-center bg-orange-950 opacity-55 border border-gray-200 rounded-lg shadow md:flex-row hover:opacity-100 hover:bg-opacity-55 w-full h-full overflow-hidden cursor-pointer">
            <div className="flex-none w-1/3 h-full">
                {/* Display event image */}
                <img className="object-cover w-full h-full rounded-t-lg h-96  md:w-48 md:rounded-none md:rounded-s-lg" src={event[eventkey]?.image} alt="" />
            </div>
            <div className="flex flex-col justify-start p-4 leading-normal max-h-full w-full">
                {/* Display event title */}
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{eventkey}</h5>
                {/* Display event abstract */}
                <p className="mb-3 font-normal text-gray-200 overflow-hidden">{event[eventkey]?.abstract}</p>
                <div className='flex justify-end'>
                    {/* Display event start year and country label */}
                    <p className='font-bold text-gray-400'>{event[eventkey]?.start.substring(0, 4)},{event[eventkey]?.countryLabel}</p>
                </div>
            </div>
        </div>
    );
}

export default EventCard;
