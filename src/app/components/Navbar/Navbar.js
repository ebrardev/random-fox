import React from 'react';
import './navbar.css';
import Link from 'next/link';
import { BsGithub, BsTwitter } from 'react-icons/bs';
import { AiFillMediumSquare } from 'react-icons/ai';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <div className="navbar-left">
          <li className="navbar-item">
            <a href="https://github.com/ebrardev" className="navbar-link">
              <BsGithub size={30} />
            </a>
          </li>
          <li className="navbar-item">
            <a href="https://twitter.com/ebrardev" className="navbar-link">
              <BsTwitter size={30} />
            </a>
          </li>
          <li className="navbar-item">
            <a href="https://medium.com/@ebraraltunkynk" className="navbar-link">
              <AiFillMediumSquare size={30} />
            </a>
          </li>
        </div>
        <h1 className="navbar-title">Random Fox</h1>
      </ul>
    
    </nav>
  );
};

export default Navbar;
