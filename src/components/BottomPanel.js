import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';


function BottomPanel({content}) {
    return (
        <div className="bg-white text-black border-2 border-solid rounded h-full overflow-auto">
            <div className="grid grid-rows-10 h-full">
                <div className='row-span-1'>
                    <h1 className="font-bold text-3xl text-center p-4">Sur la même thématique</h1>
                </div>
                <div className='row-start-2 row-span-9 overflow-hidden p-8 pt-14'>
                    <ul className='list-inside truncate h-full break-words flex flex-row justify-between'>
                        {Object.entries(content).map(([key, value]) => (
                                <Tippy content={value} key={key}>
                                    <li className="overflow-hidden text-ellipsis tooltip">
                                        {value}
                                    </li>
                                </Tippy>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default BottomPanel;