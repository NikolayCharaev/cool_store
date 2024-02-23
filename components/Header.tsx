import React from 'react';
import logo from '@/public/logo.svg';
import noAuth from '@/public/no-auth.svg';
import searchIcon from '@/public/search-icon.svg';

import basketIcon from '@/public/basket.svg';
import favoriteIcon from '@/public/like.svg';

import Image from 'next/image';
import Link from 'next/link';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="container my-6 flex justify-between items-center">
      <Logo />
      <div className="flex items-center gap-2.5">
        <div className="bg-dark w-9 h-9 rounded-full flex justify-center items-center">
          <Image src={noAuth} width={22} height={19} alt="profile-icon" />
        </div>
        <p className="text-grey">Nikolai Charaev</p>
      </div>
      <form action="">
        <label className="relative block ">
          <span className="absolute inset-y-0 left-4 flex items-center ">
            <Image width={13} height={13} src={searchIcon} alt="search-icon" />
          </span>
          <input
            className="rounded-md w-[303px] text-lg focus:outline-none bg-dark px-[38px] py-[7px] text-white"
            type="text"
            placeholder="Search for anything..."
          />
        </label>
      </form>

      <div className="flex items-center gap-x-5">
        <Image width={24} height={24} src={favoriteIcon} alt="like-icon" />
        <div className="relative">
          <Link href='/basket'>
            <Image width={24} height={24} src={basketIcon} alt="basket-icon" />
            <span className="absolute flex justify-center items-center right-0 bottom-0 bg-blueviolet-light p-2 w-3 h-3 text-center text-white rounded-full  text-[9px]">
              1
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
