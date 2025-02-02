import React from "react";
import BotCard from "./BotCard";

const BotArmy=({army, releasebot, deletebot}) => {

    return(
        <div className="bot-army">
            <h2>Bot-army</h2>
            <div className="bot-grid">
                {army.map((bot)=>(
                    <BotCard
                    key={bot.id}
                    bot={bot}
                    handleClick={()=> releasebot(bot)}
                    handleDelete={deletebot(bot)}
                    />
                ))}
            </div>
        </div>
    );
};
export default BotArmy;