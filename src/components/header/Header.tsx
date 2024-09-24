import React from 'react';

interface HeaderProps {
  title: string;
  links: { name: string; url: string }[];
}

const Header: React.FC<HeaderProps> = ({ title, links }) => {
  return (
    <header>
      <div>
        <div>
          <a href="/">{title}</a>
        </div>

        {/* 네비게이션 */}
        <nav>
          {links.map((link, index) => (
            <a key={index} href={link.url}>
              {link.name}
            </a>
          ))}
        </nav>

        <div>
          <input type="text" placeholder="검색" />
        </div>

        <div>
          <button>로그인</button>
          <button>회원가입</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
