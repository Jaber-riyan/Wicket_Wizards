import PropTypes from 'prop-types';

const Navbar = (props) => {
    const {coinsAmounts} = props;
    return (
        <div>
            <nav className="mb-7">
                <div className="navbar rounded-b-lg bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 text-[#131313B3] backdrop-blur-2xl bg-opacity-70 bg-transparent">
                    <div className="navbar-start">
                        <a className="text-xl flex items-center justify-center">
                            <img src="https://i.ibb.co.com/K6d3LJ6/logo.png" alt="" />
                        </a>
                    </div>
                    <div className="navbar-end">
                        <div className="md:block hidden">
                            <ul className="menu-horizontal px-1 space-x-7 items-center justify-center">
                                <li
                                    className="hover:text-[#4b4bed] text-[#131313B3] font-[700] text-[14px] cursor-pointer">
                                    <a>Home</a>
                                </li>
                                <li
                                    className="hover:text-[#4b4bed] text-[#131313B3] font-[700] text-[14px] cursor-pointer">
                                    <a>Fixture</a>
                                </li>
                                <li
                                    className="hover:text-[#4b4bed] text-[#131313B3] font-[700] text-[14px] cursor-pointer">
                                    <a>Teams</a>
                                </li>
                                <li
                                    className="hover:text-[#4b4bed] text-[#131313B3] font-[700] text-[14px] cursor-pointer">
                                    <a>Schedules</a>
                                </li>
                                <li
                                    className=" border-2 py-2 px-3 rounded-xl">
                                    <a className="flex gap-2 justify-center items-center text-[14px]"><span className="text-[#131313] font-semibold ">{coinsAmounts} Coin</span> <img src="https://i.ibb.co.com/r3ZHZDc/coin.png" alt="" /></a>
                                </li>
                            </ul>
                        </div>
                        <div className="dropdown">
                            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex="0"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow right-0">
                                <li
                                    className="hover:text-[#4b4bed] text-[#131313B3] font-[700] text-[14px] cursor-pointer">
                                    <a>Home</a>
                                </li>
                                <li
                                    className="hover:text-[#4b4bed] text-[#131313B3] font-[700] text-[14px] cursor-pointer">
                                    <a>Fixture</a>
                                </li>
                                <li
                                    className="hover:text-[#4b4bed] text-[#131313B3] font-[700] text-[14px] cursor-pointer">
                                    <a>Teams</a>
                                </li>
                                <li
                                    className="hover:text-[#4b4bed] text-[#131313B3] font-[700] text-[14px] cursor-pointer">
                                    <a>Schedules</a>
                                </li>
                                <li
                                    className=" border-2 py-3 px-4 rounded-xl">
                                    <a className="flex gap-3 justify-center items-center"><span className="text-[#131313] font-semibold text-[1rem]">{coinsAmounts} Coin</span> <img src="https://i.ibb.co.com/r3ZHZDc/coin.png" alt="" /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

Navbar.propTypes = {
    coinsAmounts : PropTypes.number.isRequired,
}

export default Navbar;