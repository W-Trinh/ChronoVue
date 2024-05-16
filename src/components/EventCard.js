import React from 'react';
import logo from '../resources/img/logo.svg';

function EventCard() {
    return(
        
        <a href="#" class="flex flex-col items-center bg-orange-950 opacity-55 border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-orange-950 hover:opacity-80 w-full h-full overflow-hidden">
            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={logo} alt=""/>
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
        </a>

    );
}

export default EventCard;