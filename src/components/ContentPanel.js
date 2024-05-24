import React from 'react';

function ContentPanel({ title, event }) {
  // Destructure props directly in the function signature

  // Extract properties from the event object for easier readability
  const { start, countryName, abstract, image } = event[title] || {};

  return (
    <div className="bg-orange-950 bg-opacity-55 text-white p-4 border-2 border-solid rounded h-full overflow-auto">
      {/* Use CSS classes to define the grid layout */}
      <div className="grid grid-cols-3 grid-rows-10 gap-4 h-full">
        {/* Title section */}
        <div className="col-span-2 row-span-1">
          {/* Display title, start year, and country name */}
          <h1 className="font-bold text-3xl text-center">
            {title}, {start?.substring(0, 4)}, {countryName}
          </h1>
        </div>
        {/* Content section */}
        <div className="col-span-2 row-span-9 overflow-auto p-4 flex items-center">
          <div className="mt-4">
            {/* Display abstract */}
            <p className="text-clip">{abstract}</p>
          </div>
        </div>
        {/* Image section */}
        <div className="row-span-9 h-full">
          {/* Display image */}
          <img src={image} alt="Logo" className="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  );
}

export default ContentPanel;
