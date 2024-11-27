import { useState } from "react";
import Available from "./Available/Available";
import Selected from "./Selected/Selected";
import PropTypes from 'prop-types';
import { useEffect } from "react";
import { toast } from 'react-toastify';




const Main = (props) => {
    // available players useState 
    const [availablePlayers, setAvailablePlayers] = useState([]);
    // selected players useState
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    // all props 
    const { toggleButtonHandler, currentSelect, coinsAmounts, setCoinsAmounts } = props;
    const { select } = currentSelect;

    // loadData 
    useEffect(() => {
        async function fetchData() {
            const res = await fetch('players.json');
            const data = await res.json();
            setAvailablePlayers(data);
        }
        fetchData();
    }, [])


    // choice button handler 
    const selectHandler = (player) => {
        const isExist = selectedPlayers.find(p => p.playerId === player.playerId);
        if (selectedPlayers.length < 6) {
            if (!isExist) {
                if (coinsAmounts >= player.price) {
                    setCoinsAmounts(coinsAmounts - player.price);
                    // const newRemainingPlayers = availablePlayers.filter(p => p.playerId !== player.playerId);
                    // setAvailablePlayers(newRemainingPlayers);
                    setSelectedPlayers([...selectedPlayers, player]);
                    toast.success(`Congrates !! "${player.name}" is now in your Squad`);
                }
                else {
                    toast.error(`You Have't that much money to add "${player.name}" in squad`);
                }
            }
            else {
                toast.error(`"${player.name}" Already selected`);
            }
        }
        else {
            toast.error(`Already ${selectedPlayers.length} players in your squad.`);
        }
    }

    // sort data 
    const sortData = (data) => {
        data.sort((a, b) => {
            return (a.price || 0) - (b.price || 0);
        })
        return (data);
    }

    // delete selected player 
    const deleteSelectedPlayerHandler = (player) => {
        const newRemainingSelectedPlayers = selectedPlayers.filter(p => p.playerId !== player.playerId);
        setSelectedPlayers(newRemainingSelectedPlayers);
        setCoinsAmounts(coinsAmounts + player.price);
        // const newAvailablePlayers = [...availablePlayers, player];
        // const sortedData = sortData(newAvailablePlayers);
        // setAvailablePlayers(sortedData);
        toast.info(`"${player.name}" Remove From squad List`)
    }

    return (
        <div className="mb-16">
            <div className="flex justify-between items-center mb-10">
                {
                    select === "available" ? <h2 className="text-[#131313] font-bold md:text-3xl text-[1rem]">Available Players: {availablePlayers.length}</h2>
                        : <h2 className="text-[#131313] font-bold md:text-3xl text-[1rem]">Selected Player ({selectedPlayers.length}/6)</h2>
                }
                <div className="">
                    <button onClick={() => toggleButtonHandler("available")} className={`md:py-3 py-2 md:px-6 px-4 ${select === 'available' ? 'text-[#131313] bg-gradient-to-r from-[#ed8eba] to-[#fdd057]' : 'text-[#131313a6]'} rounded-l-lg md:text-xl text-[1rem] font-bold transition-all ease-in-out`}>Available</button>

                    <button onClick={() => toggleButtonHandler("selected")} className={`md:py-3 py-2 md:px-6 px-4 ${select === 'selected' ? 'text-[#131313] bg-gradient-to-l from-[#ed8eba] to-[#fdd057]' : 'text-[#131313a6]'} rounded-r-lg text-xl font-bold transition-all ease-in-out`}>Selected ({selectedPlayers.length})</button>
                </div>
            </div>
            {
                select === "available" ? <Available selectHandler={selectHandler} availablePlayers={availablePlayers}></Available> : <Selected toggleButtonHandler={toggleButtonHandler} selectedPlayers={selectedPlayers} deleteSelectedPlayerHandler={deleteSelectedPlayerHandler}></Selected>
            }
        </div >
    );
};

Main.propTypes = {
    toggleButtonHandler: PropTypes.func.isRequired,
    currentSelect: PropTypes.object.isRequired,
    coinsAmounts: PropTypes.number.isRequired,
    setCoinsAmounts: PropTypes.func.isRequired,
}

export default Main;