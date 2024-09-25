import React from 'react';

interface HeaderProps {
  title: string;
  links: { name: string; url: string }[];
}

const Header: React.FC<HeaderProps> = ({ links }) => {
  return (
    <header className="border-b border-g-400">
      <div className="container mx-auto flex items-center justify-between py-5">
        <div>
          <img src="/src/assets/img/logo.svg" alt="rapid stock" />
        </div>

        <nav className="flex gap-x-12 md:gap-x-4 font-semibold">
          {links.map((link, index) => (
            <a key={index} href={link.url}>
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center w-5/12 gap-2.5 px-6 py-2.5 rounded-full bg-g-100">
          <input type="text" placeholder="검색" className="w-full" />
          <img src="/src/assets/img/ico-search.svg" alt="" />
        </div>

        <div className="flex gap-x-12 md:gap-x-4">
          <button className="text-g-600">로그인</button>
          <button className="text-g-600">회원가입</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
