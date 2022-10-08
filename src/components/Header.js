import React from 'react';
import './head.css';
import MyImage from '../assets/menu.png';
function Header() {
  return (
    <div class="header">
      <img src={MyImage} alt="menu" />
      <h1>Movie Heist</h1>
    </div>
  );
};
export default Header;
  