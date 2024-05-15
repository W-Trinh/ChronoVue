import './App.css';
import ContentPanel from './ContentPanel';
import * as Sparql from './Sparql';

function App() {
  return (
    <div className="bg-blue-200 min-h-screen relative">
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="size-4/6">
          <ContentPanel/>
        </div>
      </div>
    </div>
  );
}

export default App;
