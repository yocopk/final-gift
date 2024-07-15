import React from 'react';
import { Link } from 'react-router-dom';

interface ChoicePageProps {
  word: string;
}

const ChoicePage: React.FC<ChoicePageProps> = ({ word }) => {
  return (
    <div className="flex flex-col gap-8 h-screen w-screen bg-gray-200 justify-center items-center">
      <h1 className="text-5xl text-black fade-in-first">
        Riccardo, la tua è stata una scelta... <span className="text-red-500 fade-in-third">{word}</span>
      </h1>

      <Link to="/cards" className="text-xl text-white bg-blue-500 p-4 rounded-lg transition-all hover:text-white hover:bg-blue-900 hover:scale-110 fade-in-fourth">Torna indietro</Link>
    </div>
  );
};

export default ChoicePage;
