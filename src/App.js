import './App.css';
import TopBar from './components/TopBar';
import BgCard from './components/bg';
import Listing from './components/Listing';


function App() {
  return (
    <div className="App">
      <TopBar/>
      <BgCard/>
      <Listing/>
    </div>
  );
}

export default App;
