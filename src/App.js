import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import BotCollection from "./components/BotCollection";
import BotArmy from './components/BotArmy';
import BotSpecs from '/components/BotSpecs';
import FilterBar from '/components/FilterBar';
import SortBar from '/components/SortBar';

const App= ()=>{
  const [bots, setBots]=useState([]);
  const [army, setArmy]=useState([]);
  
  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));

  }, []);
        
      return(
        
        <Router>
          <div>
            <h1>Bot Battlr</h1>
            <SortBar setBots={setBots}/>
            <FilterBar setBots={setBots}/>
            <BotArmy army={army} setArmy={setArmy}/>
            <Routes>
              <Route path="/" elements ={<BotCollection bots={bots} army={army} setArmy={setArmy}/>} />
              <Route path="/bot/:id" elements ={<BotSpecs bots={bots} army={army} setArmy={setArmy}/>} />
            </Routes>
          </div>
        </Router>
      );
}
export default App;
