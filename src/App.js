import React, {useState} from 'react';
import './App.css';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [joke, setJoke] = useState("")
  
    function getChuckJoke(){
      fetch('https://api-example-chuck.herokuapp.com/maps')
        .then(response => response.json())
        .then(data => setJoke(data.value))
    }
      useEffect(()=>{
        getChuckJoke()
      }, [])
  return (
    <div className="App">
    <h2 className = "title">Chuck Norris Joke Generator</h2>

      <div className="card" style= {{width:"25rem", margin: "auto"}}>
        <img className="card-img-top" src="https://img.icons8.com/plasticine/400/chuck-norris.png" alt="image" style={{width:
        "100%"}}/>
            <div className="card-body">
              <h4 className="card-title">Did you know that:</h4>
        <p className="card-text">{joke}</p>
            </div>
            <button onClick={getChuckJoke} className="btn btn-primary"><b>Generate</b></button>
      </div>
    </div>
  );
}

export default App;
