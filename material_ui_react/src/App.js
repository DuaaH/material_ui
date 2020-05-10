import React from 'react';
import Header from "./components/Header"
import './App.css';
import { Button } from '@material-ui/core';


function App() {
  return (
    <div className="App">
      <Header />
      <Button variant="contained" color="primary">Hello World</Button>
    </div>
  );
}

export default App;
