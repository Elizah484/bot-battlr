import React from "react";

const BotCard = ({ bot, handleClick, handleDelete }) => {

  
  
  return (
    <div className="bot-card" onClick={() => handleClick?.(bot)}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      {handleDelete && (
        <button
          className="delete-button"
          onClick={(e) => {
            e.stopPropagation(); 
            handleDelete(bot);
          }}
        >
          X
        </button>
      )}
    </div>
  );
};

export default BotCard;
