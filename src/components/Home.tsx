import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [noButtonPosition, setNoButtonPosition] = useState({ top: 'auto', left: 'auto' });
  const [showOnHover, setShowOnHover] = useState("none");

  const moveNoButton = () => {
    const newTop = Math.floor(Math.random() * 90) + '%';
    const newLeft = Math.floor(Math.random() * 90) + '%';
    setNoButtonPosition({ top: newTop, left: newLeft });
  };

  const showGif = () => {
    setShowOnHover("block");
  };

  const hideGif = () => {
    setShowOnHover("none");
  };

  return (
    <div className="flex flex-col items-center justify-start md:justify-center h-screen">
      <p className='text-2xl md:text-4xl text-black font-medium mt-10 md:mt-0 mb-4 z-10 fade-in-first'>Ciao Riccardo...</p>
      <h1 className="text-2xl md:text-5xl text-center text-black mb-8 px-8 fade-in-second">La classe di progettoCODE <b>seconda edizione</b>, è la tua preferita?</h1>
      <div className="flex flex-col items-center fade-in-third">
        <div className="flex justify-center gap-8 fade-in-third">
          <Link 
            to="/second-question" 
            className="px-8 py-4 text-2xl bg-green-500 text-white rounded-lg absoulte z-10 transition-all hover:text-white hover:bg-green-800"
            onMouseEnter={showGif}
            onMouseLeave={hideGif}
          >
            Si
          </Link>
          <button
            className={`px-8 py-4 text-2xl bg-red-500 text-white rounded-lg ${noButtonPosition.top === 'auto' ? '' : 'absolute'}`}
            style={noButtonPosition.top === 'auto' ? {} : { top: noButtonPosition.top, left: noButtonPosition.left }}
            onMouseEnter={moveNoButton}
          >
            No
          </button>
        </div>
      </div>
      <iframe 
        style={{ display: showOnHover }} 
        id='gif' 
        src="https://giphy.com/embed/pynZagVcYxVUk" 
        width="480" 
        height="269" 
        className="giphy-embed mt-10 absolute bottom-10 rounded-lg" 
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Home;

