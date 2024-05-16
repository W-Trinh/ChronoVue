function HomePage() {
    return (
        <div className="flex flex-col bg-blue-200 h-screen w-screen items-center">

        <div className="size-1/3 p-4">
            <div className="bg-white border-solid rounded h-full w-full"></div>
        </div>

        <div className="columns-3 w-screen h-1/3 flex items-stretch">
            <div className="w-1/3 p-4">
                <div className="bg-white border-solid rounded h-full w-full"></div>
            </div>
            <div className="flex w-1/3 justify-center items-center">
                <div className="w-1/4">
                    <button class="button-27" role="button">Roll</button>
                </div>
            </div>
            
            <div className="w-1/3 p-4">
                <div className="bg-white border-solid rounded h-full w-full"></div>
            </div>
        </div>

        <div className="size-1/3 p-4">
            <div className="bg-white border-solid rounded h-full w-full"></div>
        </div>

        </div>
    );
  }
  
  export default HomePage;
  