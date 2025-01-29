import React from "react";
import BotCard from "./BotCard";

const BotArmy=({army }) =>{

    const releaseBot=(bot)=>{
        console.log ("Bot released:", bot);
    };
const deleteBot=(bot)=>{
    console.log("Bot deleted:", bot);

    };    
    console.log(releaseBot);

    return(
        <div className="bot-army">
            <h2>Bot-army</h2>
            <div className="bot-grid">
                {army.map((bot)=>(
                    <BotCard
                    key={bot.id}
                    bot={bot}
                    handleClick={()=> console.log("Clicked",bot)}
                    handleDelete={deleteBot}
                    />
                ))}
            </div>
        </div>
    );
};
export default BotArmy;