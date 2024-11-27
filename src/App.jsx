import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import { useState } from 'react'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  // coin useState 
  const [coinsAmounts, setCoinsAmounts] = useState(0);
  // button toggle useState
  const [currentSelect, setCurrentSelect] = useState({
    select: "available",
  })

  // coin increase handler 
  const coinIncreaseHandler = () => {
    setCoinsAmounts(coinsAmounts + 600000);
  }
  // toggle button handler
  const toggleButtonHandler = (status) => {
    setCurrentSelect({
      select: status
    })
  }


  return (
    <div className='bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200'>
      <div className='md:w-[80%] w-11/12 mx-auto'>
        <ToastContainer position="top-center"
          autoClose={1500}
          hideProgressBar={false}
          closeOnClick={true}
          pauseOnHover={true}
          draggable={true} />
        <div className="sticky top-0 z-10">
          <Navbar coinsAmounts={coinsAmounts}></Navbar>
        </div>
        <Banner coinIncreaseHandler={coinIncreaseHandler}></Banner>
        <div className='md:pb-40 pb-48'>
          <Main toggleButtonHandler={toggleButtonHandler} currentSelect={currentSelect} coinsAmounts={coinsAmounts} setCoinsAmounts={setCoinsAmounts}></Main>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
