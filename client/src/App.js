import React from 'react';
import './App.css';
import axios from 'axios';
import {useEffect} from 'react';
import Test from './Test'
import Button from "react-bootstrap/Button";

function App() {

  const call = async () => {
    axios.get('/api/hello').then((res) => console.log(res.data));
  };

  useEffect(() => {
    call();
  }, []);
  
  return ( 
    <div className="App">
      <header className="App-header">
        <p>페이지</p>
        <Test />
      </header>
      <button type="button" class="btn btn-dark m-3">Dark</button>
      <Button variant="success">glgl
        </Button>
    </div>
  );
}

export default App;
