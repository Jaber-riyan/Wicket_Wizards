import PropTypes from 'prop-types';

const SelectCard = ({ player, deleteSelectedPlayerHandler }) => {
    return (
        <div className='mb-3 border-2 p-4 rounded-2xl flex justify-between items-center'>
            <div className='flex gap-6 items-center'>
                <img className='w-20 h-20 object-cover rounded-2xl' src={player.image} alt="" />
                <div>
                    <h3 className='text-[#131313] text-xl font-semibold'>{player.name}</h3>
                    <p className='text-[#13131399] font-medium text-[1rem]'>{player.battingType}</p>
                </div>
            </div>
            <div className='flex gap-10'>
                <h2 className='font-bold text-green-600 text-xl'>+ ${player.price}</h2>
                <button onClick={()=>deleteSelectedPlayerHandler(player)} className='text-[#f14749] text-xl font-bold'>
                    <i className="fa-regular fa-trash-can"></i>
                </button>
            </div>
        </div>
    );
};

SelectCard.propTypes = {
    player: PropTypes.object.isRequired,
    deleteSelectedPlayerHandler: PropTypes.func.isRequired,
}

export default SelectCard;