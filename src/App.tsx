// import { useState } from 'react';
import './App.css';

import Header from './components/header/Header';

const App: React.FC = () => {
  // const [count, setCount] = useState(0);

  const links = [
    { name: '뉴스룸', url: '/news' },
    { name: '커뮤니티', url: '/community' },
    { name: '모의투자', url: '/stock' },
  ];

  return (
    <>
      <Header links={links} />
    </>
  );
};

export default App;
