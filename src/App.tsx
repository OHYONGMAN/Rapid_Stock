// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import NewsPage from './components/main/newsPage/NewsPage';
import Community from './components/main/community/Community';
import Login from './components/main/login/Login';
import SignUp from './components/main/signUp/SignUp';

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
        <Route path="/community" element={<Community />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
