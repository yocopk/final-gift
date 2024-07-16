import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';
import Page404 from './pages/Page404';
import SecondPage from './pages/SecondPage';
import CardPage from './pages/CardPage';
import ChoicePage from './pages/ChoicePage';
import OtherPage from './pages/OtherPage';
import FinalPage from './pages/FinalPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/second-question" element={<SecondPage />} />
        <Route path="/cards" element={<CardPage />} />
        <Route path="/flavio" element={<ChoicePage word="comprensibile" />} />
        <Route path="/valerio" element={<ChoicePage word="affrettata" />} />
        <Route path="/christian" element={<ChoicePage word="strategica" />} />
        <Route path="/sofia" element={<ChoicePage word="azzeccata" />} />
        <Route path="/sofia-plus" element={<ChoicePage word="dettata dalla paura" />} />
        <Route path="/other" element={<OtherPage />} />
        <Route path="/final" element={<FinalPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
};

export default App;
