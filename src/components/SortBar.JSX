import React  from "react";

function SortBar({setbots}){
    function sortBots(attribute){
        setbots((prevBots) => [...prevBots].sort((a,b)=> b[attribute] - a [attribute]));

    }
    return(
        <div>
            <button onClick={()=> sortBots("health")}>Sort by Health</button>
            <button onClick={()=> sortBots("damage")}>Sort by Damage</button>
            <button onClick={()=> sortBots("armor")}>Sort by Armor</button>
        </div>
    );
}
export default SortBar;