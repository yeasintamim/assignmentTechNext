import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './NavBar.js'
import {Info} from './CardInfo.js'
import './App.css';
import Card from './Card.js'

function App() {



  console.log(Info)
  return (
    <div className="App">
      <h1>Welcome, Find a flexible flight for your next trip</h1>
      <h1>countries you can travel to right now</h1>
      <p>Popular destinations open to visitors from your country</p>
      <NavBar />
     
      {/* {
        Info.map(({title,description})=>{
        return <Card title = {title} description = {description} />}
        )
      } */}
      
    </div>
  );
}

export default App;

