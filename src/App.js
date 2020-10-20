import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const APP_ID = '583cacab'
  const APP_KEY = '68010ea183f127431f5f7c1695d538b1'

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('Effect has been run');
  })

  return (
    <div className="App">
      <form className="search-form">
        <h1>Hello React</h1>
        <button 
          type="submit"
          className="search-button"
          >
          Search
        </button>
      </form>
      <h1
        onClick={() => setCounter(counter + 1)}
        >
          {counter}
      </h1>
    </div>
  );
}

export default App;
