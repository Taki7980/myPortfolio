/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from './logo.svg';
// import l1 from './images/clear_sky_1.jpg';
import profile from './images/pc.jpg';

import './App.css';
import Navbar from './components/Navbar';
import Nextsection from './components/Nextsection';
import Cardsection from './components/Cardsection';
import Myprojects from './components/Myprojects';
import Footer from './components/Footer';

function App() {
    return (
    <>
      <div className="bg-black text-white font-semibold">
        <Navbar navItem2 ="Contact" profilePic={profile}/>
        <Nextsection profilePic={profile}/>
        <Cardsection/>
        <Myprojects />
        <Footer profilePicture={profile} />
      </div>
    </>
  );
}

export default App;
