// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import NewsPage from './components/main/newsPage/NewsPage';

const App: React.FC = () => {
  // const [count, setCount] = useState(0);

  const links = [
    { name: '뉴스룸', url: '/news' },
    { name: '커뮤니티', url: '/community' },
    { name: '모의투자', url: '/stock' },
  ];

  return (
    <Router>
      <Header links={links} />
      <Routes>
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
