import React from 'react';
import icoOpenArr from '/src/assets/img/ico-openArr.svg';
import icoCloseArr from '/src/assets/img/ico-closeArr.svg';
import icoSetting from '/src/assets/img/ico-setting.svg';
import icoLogout from '/src/assets/img/ico-logout.svg';
import { Link } from 'react-router-dom';

interface SideBarProps {
  isOpen: boolean;
  onClick: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ isOpen, onClick }) => {
  return (
    <>
      {/* 사이드바 토글 버튼 등 */}
      <button onClick={onClick} className="fixed right-3">
        {isOpen ? <img src={icoOpenArr} alt="" /> : null}
      </button>
      {isOpen ? null : (
        <div className="fixed flex flex-col items-center bg-g-100 w-96 h-screen top-0 right-0">
          <div className="absolute left-2 pt-5">
            <button onClick={onClick} className="">
              <img src={icoCloseArr} alt="" />
            </button>
          </div>
          <p className="mt-24">진승현님 환영합니다!</p>
          <div className="flex gap-4">
            <Link to="/mypage" className="flex">
              마이페이지 <img src={icoSetting} alt="" />
            </Link>
            <button className="flex items-center">
              로그아웃 <img src={icoLogout} alt="" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
