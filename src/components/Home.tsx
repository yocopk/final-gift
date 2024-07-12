import React, { useState } from 'react';

const Home: React.FC = () => {
  const [noButtonPosition, setNoButtonPosition] = useState({ top: '50%', left: '50%' });

  const moveNoButton = () => {
    const newTop = Math.floor(Math.random() * 90) + '%';
    const newLeft = Math.floor(Math.random() * 90) + '%';
    setNoButtonPosition({ top: newTop, left: newLeft });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl text-black mb-8">domanda?</h1>
      <div className="flex justify-center items-center">
        <button className="px-4 py-2 bg-green-500 text-white rounded">Si</button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded absolute"
          style={{ top: noButtonPosition.top, left: noButtonPosition.left }}
          onMouseEnter={moveNoButton}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default Home;
