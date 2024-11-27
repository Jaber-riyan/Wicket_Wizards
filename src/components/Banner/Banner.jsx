import PropTypes from 'prop-types';
import { toast } from 'react-toastify';


const Banner = (props) => {
    const { coinIncreaseHandler } = props;

    return (
        <div className="bg-[url('https://i.ibb.co.com/DLhx4NY/bg-shadow.png')] bg-cover p-12 bg-black rounded-2xl text-white flex-col items-center justify-center text-center mb-16">

            <div className="flex justify-center items-center mb-6">
                <img src="https://i.ibb.co.com/k8FCHzt/banner-main.png" alt="" />
            </div>
            <h2 className="text-4xl font-bold mb-6">Assemble Your Ultimate Dream 11 Cricket Team</h2>
            <p className="text-2xl font-medium opacity-70 mb-6">Beyond Boundaries Beyond Limits</p>
            <button
                onClick={() => {
                    coinIncreaseHandler();
                    toast.success("Coin added successfully");
                }} className="p-3 rounded-xl text-[#131313] font-bold text-[14px] ring ring-[#ed8eba] ring-offset-4 bg-gradient-to-r from-[#ed8eba] to-[#fdd057] btn">
                Claim Free Credit
            </button>
        </div >
    );
};

Banner.propTypes = {
    coinIncreaseHandler: PropTypes.func.isRequired,
}

export default Banner;