import React from 'react';
import logo from '/src/assets/img/logo.svg';
import search from '/src/assets/img/ico-search.svg';
import { Link } from 'react-router-dom';
import SideBar from '../sideBar/SideBar';
import { useState } from 'react';

interface HeaderProps {
  links: { name: string; url: string }[];
}

const Header: React.FC<HeaderProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (): void => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="border-b border-g-400">
      <div className="container mx-auto flex items-center justify-between py-5">
        <h1>
          <Link to="/">
            <img src={logo} alt="rapid stock" />
          </Link>
        </h1>

        <nav className="flex gap-x-12 font-semibold md:gap-x-4">
          {links.map((link, index) => (
            <Link key={index} to={link.url}>
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex w-5/12 items-center gap-2.5 rounded-full bg-g-100 px-6 py-2.5">
          <input type="text" placeholder="검색" className="w-full" />
          <button>
            <img src={search} alt="" />
          </button>
        </div>

        <div className="flex gap-x-12 md:gap-x-4">
          <Link to="/login" className="text-g-600">
            로그인
          </Link>
          <Link to="/signup" className="text-g-600">
            회원가입
          </Link>
        </div>
        <SideBar isOpen={isOpen} onClick={handleClick} />
      </div>
    </header>
  );
};

export default Header;
