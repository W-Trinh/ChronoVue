function ContentPanel({title,event}) {
  return (
    <div className="bg-orange-950 bg-opacity-55 text-white p-4 border-2 border-solid rounded h-full overflow-auto">
      <div className="grid grid-cols-3 grid-rows-10 gap-4 h-full">
        <div className="col-span-2 row-span-1">
          <h1 className="font-bold text-3xl text-center">{title}</h1>
        </div>
        <div className="col-span-2 row-span-9 overflow-auto p-4 flex items-center">
          <div className="mt-4">
            <p className="text-clip">
              {event[title].abstract}              
            </p>
          </div>
        </div>
        <div className="row-span-9 h-full">
          <img src={event[title].image} alt="Logo" className="object-cover  w-full h-full"/>
        </div>
      </div>
    </div>
  );
}

export default ContentPanel;
