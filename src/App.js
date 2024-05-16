import './App.css';
import ContentPanel from './components/ContentPanel';
import SidePanel from './components/SidePanel';
import * as Sparql from './Sparql';

function App() {
  return (
    <div className="relative bg-blue-200 grid grid-cols-10 grid-rows-10 h-screen p-8">
      <div className='col-span-2 row-span-10 pr-8 pl-8'>
        <SidePanel/>
      </div>
      <div className='col-start-3 row-span-1 col-span-6 text-center font-bold text-3xl text-center pt-8'>Titre</div>
      <div class="row-start-2 col-start-3 row-span-7 col-span-6 pt-4 pb-4 overflow-hidden">   
        <ContentPanel/>  
      </div>
      <div className='row-start-9 col-start-3 col-span-6 row-span-2'>
      </div>
      <div className='col-start-9 col-span-2 row-span-10 pr-8 pl-8'>
        <SidePanel/>
      </div>
    </div>
  );
}

export default App;
