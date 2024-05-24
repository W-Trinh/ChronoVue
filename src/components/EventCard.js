import { useNavigate } from 'react-router-dom';

function EventCard({ eventkey, event }) {
    const navigate = useNavigate();

    // Vérification des données avant le rendu du composant
    if (!event || !event[eventkey]) {
        return null; // Ne rend pas le composant s'il n'y a pas suffisamment d'éléments
    }

    const handleClick = (title) => {
        navigate(`/${title}`, {
            state: { eventkey, event }
        });
    };

    return (
        <div onClick={() => handleClick(event[eventkey].title)} className="flex flex-col items-center bg-orange-950 opacity-55 border border-gray-200 rounded-lg shadow md:flex-row hover:opacity-100 hover:bg-opacity-55 w-full h-full overflow-hidden cursor-pointer">
            <div className="flex-none w-1/3 h-full">
                <img className="object-cover w-full h-full rounded-t-lg h-96  md:w-48 md:rounded-none md:rounded-s-lg" src={event[eventkey]?.image} alt="" />
            </div>
            <div className="flex flex-col justify-start p-4 leading-normal max-h-full w-full">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{eventkey}</h5>
                <p className="mb-3 font-normal text-gray-200 overflow-hidden">{event[eventkey]?.abstract}</p>
                <div className='flex justify-end'>
                    <p className='font-bold text-gray-400'>{event[eventkey]?.start.substring(0, 4)},{event[eventkey]?.countryLabel}</p>
                </div>
            </div>
        </div>
    );
}

export default EventCard;
