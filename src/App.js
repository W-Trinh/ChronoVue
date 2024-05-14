import './App.css';
import ContentPanel from './ContentPanel';
import * as Sparql from './Sparql';

function App() {
  return (
    <div className="bg-blue-200 min-h-screen flex items-center justify-center">
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ">
        <ContentPanel/>
      </div>
    </div>
  );
}

export default App;
