import React from 'react';
import logo from '../resources/img/logo.svg';

function EventCard({title,content,image}) {
    return(
        
        <a href="/content" class="flex flex-col items-center bg-orange-950 opacity-55 border border-gray-200 rounded-lg shadow md:flex-row hover:opacity-100 hover:bg-opacity-55 w-full h-full overflow-hidden">
            <div class="flex-none w-30 h-full">
                <img class="object-cover w-full h-full rounded-t-lg h-96  md:w-48 md:rounded-none md:rounded-s-lg" src={image} alt=""/>
            </div>
            <div class="flex flex-col justify-start p-4 leading-normal max-h-full w-70">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">{title}</h5>
                <p class="mb-3 font-normal text-gray-200 overflow-hidden">{content}</p>
            </div>
        </a>

    );
}

export default EventCard;