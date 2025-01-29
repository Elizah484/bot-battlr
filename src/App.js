import React, { useState, useEffect } from "react";
import './App.css';
import BotCollection from "./components/BotCollection";
import BotArmy from './components/BotArmy';

const App= ()=>{
  const [bots, setBots]=useState([]);
  const [army, setArmy]=useState([]);
  
  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setBots(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  

      const enlist=(bot)=>{
        if(!army.some((enlistedBot)=> enlistedBot.id === bot.id)){
          setArmy([...army, bot]);
        }
      };
      const releaseBot=(bot)=>{
        setArmy(army.filter((enlistedBot)=> enlistedBot.id !== bot.id));
      };
     
      const deletebot=(bot)=>{
        setArmy ((prevArmy)=> prevArmy.filter ((enlistBot)=> enlistBot.id !== bot.id));
      }
      return(
        <div className ="App">
          <h1>My bot battlr</h1>
          <BotArmy army={army} releaseBot={releaseBot} deleteBot={deletebot}/>
          <BotCollection bots={bots} enlist={enlist}/>
        </div>
      );
};
export default App;
