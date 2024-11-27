import PropTypes from 'prop-types';

const AvailCard = ({ player, selectHandler }) => {
    return (
        <div>
            <div className="card card-compact bg-base-100 border-2 rounded-xl p-5 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                <figure>
                    <img className='rounded-xl w-full h-56 mb-5 object-cover'
                        src={player.image}
                        alt={player.name} />
                </figure>
                <div className="">
                    <h2 className="text-xl font-semibold text-[#131313] mb-5"><i className="fa-solid fa-user"></i> {player.name}</h2>
                    <div className='flex justify-between items-center mb-3 border-b-2 pb-2'>
                        <h1 className='text-[#131313a9]'><i className="fa-solid fa-flag"></i> {player.country}</h1>
                        <button className='bg-gradient-to-l from-[#ed8eba81] to-[#fdd1579d] px-2 py-3 rounded-lg text-[#131313] text-[14px] font-bold'>{player.role}</button>
                    </div>
                    <div className='mb-3'>
                        <h3 className='text-[#131313] font-bold text-[14px] mb-2'>Rating</h3>
                        <div className='flex justify-between items-center'>
                            <h3 className='text-[#131313] font-bold text-[14px]'>{player.battingType}</h3>
                            <h3 className='text-[#131313B3] font-bold text-[14px]'>{player.bowlingType}</h3>
                        </div>
                    </div>
                    <div className="card-actions items-center justify-between">
                        <p className='text-[#131313] font-bold text-[1rem]'>Price: $ {player.price + player.playerId}</p>
                        <button onClick={()=>selectHandler(player)} className="border-2 p-2 rounded-xl hover:bg-[#E7FE29] hover:text-black hover:font-bold font-semibold transition-all ease-in-out bg-gradient-to-r from-[#ed8eba] to-[#fdd157c0]">Choose Player</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

AvailCard.propTypes = {
    player: PropTypes.object.isRequired,
    selectHandler:PropTypes.func.isRequired,
}

export default AvailCard;