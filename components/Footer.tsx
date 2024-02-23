import React from 'react';
import Logo from './Logo';
import Socials from './Socials';

const Footer = () => {
  return (
    <footer className="p-6 bg-dark container rounded-md text-turquoise-light">
      <div className=" flex justify-between items-center">
        <Logo />
        <p>
          Developed by <span className="text-blueviolet-dark">Charaev</span>
        </p>
        {/* <Socials /> */}
      </div>
    </footer>
  );
};

export default Footer;
