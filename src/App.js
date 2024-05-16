import './App.css';
import ContentPanel from './ContentPanel';
import * as Sparql from './Sparql';

function App() {
  return (
    <div className="relative bg-blue-200 grid grid-cols-10 grid-rows-10 h-screen">
      <div className='col-span-1 row-span-10'></div>
      <div className='col-start-2 row-span-1 col-span-8'></div>
      <div class="row-start-2 col-start-2 row-span-8 col-span-8 p-16 overflow-hidden">   
        <ContentPanel/>  
      </div>
      <div className='row-start-10 col-start-2 col-span-8 row-span-1'></div>
      <div className='col-start-10 col-span-1 row-span-10'></div>
    </div>
  );
}

export default App;
