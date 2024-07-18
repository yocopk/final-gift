import React from 'react';
import { Link } from 'react-router-dom';

interface ChoicePageProps {
  word: string;
  url: string;
}

const ChoicePage: React.FC<ChoicePageProps> = ({ word, url }) => {
  return (
    <div className="flex flex-col gap-8 h-screen w-screen bg-gray-200 justify-center items-center">
      <h1 className="text-5xl text-black fade-in-first">
        Riccardo, la tua è stata una scelta... <span className="text-red-500 fade-in-third">{word}</span>
      </h1>
      <img src={url} className='rounded-lg fade-in-third' width="480" height="288"/>
      <Link to="/cards" className="text-xl text-white bg-blue-500 p-4 rounded-lg transition-all hover:text-white hover:bg-blue-900 hover:scale-110 fade-in-fourth">Torna indietro</Link>
    </div> 
  );
};

export default ChoicePage;
