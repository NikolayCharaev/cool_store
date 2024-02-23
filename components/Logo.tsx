import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logo.svg';
const Logo = () => {
  return (
    <>
      <Link href="/">
        <Image src={logo} alt="logo" width={78} height={32} />
      </Link>
    </>
  );
};

export default Logo;
