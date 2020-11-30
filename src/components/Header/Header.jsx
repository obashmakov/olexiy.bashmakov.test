import React from 'react';
import mageticLogo from '../../images/magetic_logo.jpg';
import './Header.scss';

export const Header = () => (
  <header className="header">
    <div className="header__logo">
      <img
        className="header__img"
        src={mageticLogo}
        alt="logo"
      />
    </div>

    <label htmlFor="search" className="header__label">
      <input
        className="header__search-bar"
        type="text"
        id="search"
        name="search"
      />
    </label>
  </header>
);
