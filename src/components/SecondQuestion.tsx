import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [noButtonPosition, setNoButtonPosition] = useState({ top: 'auto', left: 'auto'});
  const [showOnHover, setShowOnHover] = useState("none");

  const showGif = () => {
    setShowOnHover("block");
  };

  const hideGif = () => {
    setShowOnHover("none");
  };

  const moveNoButton = () => {
    const newTop = Math.floor(Math.random() * 90) + '%';
    const newLeft = Math.floor(Math.random() * 90) + '%';
    setNoButtonPosition({ top: newTop, left: newLeft });
  };

  return (
    <div className="flex flex-col items-center justify-start md:justify-center h-screen">
      <p className='text-2xl md:text-4xl text-black font-medium mt-10 md:mt-0 mb-4 z-10 fade-in-first'>Riccardo...</p>
      <h1 className="text-3xl md:text-5xl text-black mb-8 fade-in-second">Stai mentendo?</h1>
      <div className="flex flex-col items-center fade-in-third">
        <div className="flex justify-center gap-8 fade-in-third">
            <button className={`px-8 py-4 text-2xl bg-red-500 text-white rounded-lg ${noButtonPosition.top === 'auto' ? '' : 'absolute'}`}
            style={noButtonPosition.top === 'auto' ? {} : { top: noButtonPosition.top, left: noButtonPosition.left }}
            onMouseEnter={moveNoButton}>Si</button>
          <Link to="/cards" onMouseEnter={showGif} onMouseLeave={hideGif} className="px-8 py-4 text-2xl bg-green-500 text-white rounded-lg absoulte z-10 transition-all hover:text-white hover:bg-green-800">No</Link>
        </div>
      </div>
      <iframe style={{ display: showOnHover }} src="https://giphy.com/embed/oZvduOsUmlsk" width="480" height="259" className="giphy-embed absolute bottom-10 rounded-lg" allowFullScreen></iframe>
    </div>
  );
};

export default Home;
