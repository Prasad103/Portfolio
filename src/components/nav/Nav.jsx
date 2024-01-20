import React, { useState } from 'react';
import './nav.css';
import { CiHome } from 'react-icons/ci';
import { FaRegUser } from 'react-icons/fa';
import { GiAchievement } from 'react-icons/gi';
import { GoProject } from 'react-icons/go';
import { MdOutlineMessage } from 'react-icons/md';
import { IoSchoolSharp } from 'react-icons/io5';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home');

  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}>
        <CiHome />
      </a>
      <a href="#education" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <IoSchoolSharp />
      </a>
      <a href="#achievements" onClick={() => setActiveNav('#achievement')} className={activeNav === '#achievement' ? 'active' : ''}>
        <GiAchievement />
      </a>
      <a href="#title" onClick={() => setActiveNav('#project')} className={activeNav === '#project' ? 'active' : ''}>
        <GoProject />
      </a>
      <a href="#get-in-touch" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
        <MdOutlineMessage />
      </a>
    </nav>
  );
};

export default Nav;
