import StartGame from './components/StartGame';
import Gameplay from './components/Gameplay';
import { useState } from 'react';
import './App.css'

function App() {

  const [isGameStarted,setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  }

  return (
      <div>
        {
          isGameStarted ? <Gameplay /> : <StartGame toggle={toggleGamePlay}/>
        }
      </div>
  )
};

export default App;