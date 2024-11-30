import React from 'react'
import Router from './Router';
import Triangle from './component/triangle/Triangle';
import './App.css'
import Navbar from './component/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <div id='container'>
        <Navbar/>
      </div>
      <Router />
      <Triangle/>
    </div>
  );
}

export default App;
