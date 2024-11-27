import PropTypes from 'prop-types';
import AvailCard from './AvailCard/AvailCard';

const Available = ({ availablePlayers, selectHandler }) => {
    return (
        <div className='grid md:grid-cols-3 md:gap-3 grid-cols-1'>
            {
                availablePlayers.map((player) => <AvailCard key={player.playerId} selectHandler={selectHandler} player={player}></AvailCard>)
            }
        </div>
    );
};

Available.propTypes = {
    availablePlayers: PropTypes.object.isRequired,
    selectHandler: PropTypes.func.isRequired,
}

export default Available;