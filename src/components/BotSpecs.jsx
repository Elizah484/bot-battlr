import React from "react";
import {useParams, useNavigate} from "react-router-dom";

function BotSpecs({bots, army, SetArmy}){
    const {id} = useParams();
    const navigate =useNavigate();
    const bot =bots.find((b) => b.id === parseInt(id));

    function enlistBot (){
        if (!army.some((b) => b.id === bot.id)) {
            SetArmy([...army, bot]);
    }
    navigate("/");
}


return (
    <div>
        <h2>{bot.name}</h2>
        <img src={bot.avatar_url} alt={bot.name}/>
        <p>{bot.catchphrase}</p>
        <button onClick={()=> naviagte ("/")}>Back</button>
        <button onClick={enlistBot}>Enlist</button>
    </div>
);
}
export default BotSpecs;