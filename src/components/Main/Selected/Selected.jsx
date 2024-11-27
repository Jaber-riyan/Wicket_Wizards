import PropTypes from 'prop-types';
import SelectCard from './SelectCard/SelectCard';

const Selected = ({ selectedPlayers, toggleButtonHandler, deleteSelectedPlayerHandler }) => {
    return (
        <div>
            {/* {
                selectedPlayers.length === 0
                    ? alert("no data")
                    : selectedPlayers.map(sPlayer => (
                        <SelectCard
                            key={sPlayer.playerId}
                            toggleButtonHandler={toggleButtonHandler}
                            player={sPlayer}
                        />
                    ))
            } */}

            {
                selectedPlayers.map(sPlayer => <SelectCard key={sPlayer.playerId} toggleButtonHandler={toggleButtonHandler} player={sPlayer} deleteSelectedPlayerHandler={deleteSelectedPlayerHandler}></SelectCard>)
            }

            <button className='mt-4'>
                <span onClick={() => toggleButtonHandler("available")} className="bg-gradient-to-r from-[#ed8eba] to-[#fdd057] btn p-3 rounded-xl text-[#131313] font-bold text-[14px] ring ring-[#ed8eba] ring-offset-4">
                    Add More Player
                </span>
            </button>
        </div>
    );
};

Selected.propTypes = {
    selectedPlayers: PropTypes.object.isRequired,
    toggleButtonHandler: PropTypes.func.isRequired,
    deleteSelectedPlayerHandler: PropTypes.func.isRequired,
}

export default Selected;