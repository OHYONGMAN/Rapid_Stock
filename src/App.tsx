// import { useState } from 'react';
import './App.css';

import Header from './components/header/Header';

const App: React.FC = () => {
  // const [count, setCount] = useState(0);

  const links = [
    { name: '메뉴1', url: '/menu1' },
    { name: '메뉴2', url: '/menu2' },
  ];

  return (
    <>
      <Header title="MyLogo" links={links} />
    </>
  );
};

export default App;
