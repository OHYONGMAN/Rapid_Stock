// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import NewsPage from './components/main/newsPage/NewsPage';

const App: React.FC = () => {
  const links = [
    { name: '뉴스룸', url: '/news' },
    { name: '커뮤니티', url: '/community' },
    { name: '모의투자', url: '/stock' },
  ];

  return (
    <>
      <Router>
        <Header links={links} />
        <Routes>
          <Route path="/news" element={<NewsPage />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
