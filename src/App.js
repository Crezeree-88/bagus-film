import './App.css';
import NavigationBar from "./components/NavigationBar"
import Intro from './components/intro';
import Tranding from "./components/Tranding"
import SuperHero from './components/superhero';

import "./Style/LandingPage.css"

function App() {
  return (
    <div>
      <div className='myBG'>
        <NavigationBar/>
        <Intro/>
      </div>
      <div className='Tranding'>
        <Tranding/>
      </div>
      <div className='superhero'>
        <SuperHero/>
      </div>
    </div>
  );
}

export default App;
