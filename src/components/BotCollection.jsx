import React from "react";
import Botcard from "./BotCard";

const BotCollection =({bots,enlistBot})=>{
    return(
        <div className="bot-collection">
            <h2>Bot Collection</h2>
            <div className="bot-grid">
            {bots.map((bot) => (
                <Botcard key={bot.id} bot={bot} handleClick={enlistBot} />
            ))}
        </div>
    </div>
  );
};
export default BotCollection;