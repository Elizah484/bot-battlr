import React, {useState} from "react";
function FilterBar ({ setBots}){
    const [selectedClass, setSelectedClass]= useState("")

    function filterBots(event){
        const value=event.target.value;
        setSelectedClass(value);
        fetch("http://localhost:8001/bots")
        .then((res) => res.json())
        .then ((data) =>{
            if(value){
                setBots(data.filter((bot)=> bot.bot_class ===value));

            }else{
                setBots(data);
            }
        });
    }
    return(
        <div>
            <select value={selectedClass} onChange={filterBots}>
                <option value="">All Classes</option>
                <option value="Support">Support</option>
                <option value="Medic">Medic</option>
                <option value="Assault">Assault</option>
                <option value="Defender">Defender</option>
                <option value="Captain">Captain</option>
                <option value="Witch">Witch</option>
            </select>
        </div>
    );
}





