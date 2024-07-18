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
        <Route path="/flavio" element={<ChoicePage word="comprensibile" url='https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2M5OHh4Z3E1MTIwajB4aDlmY3Ixbzd5dmJkeGg4cTI4M2VhaXV0MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XuFt32amzHvkk/giphy-downsized-large.gif' />} />
        <Route path="/valerio" element={<ChoicePage word="saggia" url='https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcW9qNGgycGdnY25iNXFvMDI4ZDQwenRiZ2RwNmdoNzg5cHFib3IxcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oEdv9duTLhWoNhcGs/giphy.gif' />} />
        <Route path="/christian" element={<ChoicePage word="strategica" url='https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXcxc3BlYm13M3hmOHhqaXczOXpsd3AxNnZnZnNmNTRjcmE1NGl4ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d3mlE7uhX8KFgEmY/giphy.gif' />} />
        <Route path="/sofia" element={<ChoicePage word="coraggiosa" url='https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDBjeTZzb3hqbzJpdWFoY2Zxbmp1M3YzZHJuZW11eWlhM2pybHZqeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cF7QqO5DYdft6/giphy.gif' />} />
        <Route path="/sofia-plus" element={<ChoicePage word="dettata dalla paura" url='https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDU0aTd1OWxzczZkdHY1bG91cW1rYW56OGI3cHV3NWxxcmx4NDVicCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/32mC2kXYWCsg0/giphy.gif' />} />
        <Route path="/other" element={<OtherPage />} />
        <Route path="/final" element={<FinalPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
};

export default App;
