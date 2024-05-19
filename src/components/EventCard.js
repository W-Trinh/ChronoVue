import { useNavigate } from 'react-router-dom';

<<<<<<< Updated upstream
function EventCard() {
    return(
        
        <a href="/content" class="flex flex-col items-center bg-orange-950 opacity-55 border border-gray-200 rounded-lg shadow md:flex-row hover:opacity-100 hover:bg-opacity-55 w-full h-full overflow-hidden">
            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={logo} alt=""/>
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
        </a>
=======
function EventCard({ eventkey, event, allEvents }) {
    const navigate = useNavigate();
>>>>>>> Stashed changes

    const handleClick = () => {
        navigate('/content', {
            state: { eventkey, event, allEvents }
        });
    };

    console.log("allEvents:", allEvents);

    return (
        <div onClick={handleClick} className="flex flex-col items-center bg-orange-950 opacity-55 border border-gray-200 rounded-lg shadow md:flex-row hover:opacity-100 hover:bg-opacity-55 w-full h-full overflow-hidden cursor-pointer">
            <div className="flex-none w-30 h-full">
                <img className="object-cover w-full h-full rounded-t-lg h-96  md:w-48 md:rounded-none md:rounded-s-lg" src={event["image"]} alt="" />
            </div>
            <div className="flex flex-col justify-start p-4 leading-normal max-h-full w-70">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{eventkey}</h5>
                <p className="mb-3 font-normal text-gray-200 overflow-hidden">{event["abstract"]}</p>
            </div>
        </div>
    );
}

export default EventCard;
