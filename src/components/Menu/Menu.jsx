import React, { useState } from 'react';
import menuIcon from '../../images/menuIcon.png';
import discIcon from '../../images/discIcon.svg';
import logo from '../../images/logo.png';
import './Menu.scss';

export const Menu = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <nav className={
      !isMenuActive
        ? 'nav'
        : 'nav nav--active'
    }
    >
      <button
        type="button"
        className={
          !isMenuActive
            ? 'nav__burger'
            : 'nav__burger nav__burger--active'
        }
        onClick={toggleMenu}
      >
        <img
          className="nav__icon"
          src={menuIcon}
          alt="menu"
        />
        <img
          className={
            !isMenuActive
              ? 'nav__logo'
              : 'nav__logo nav__logo--active'
          }
          src={logo}
          alt="logo"
        />
      </button>

      <ul className="nav__list">
        <li className="nav__item">
          <a className="nav__link" href="/">
            <img
              className="nav__link-icon"
              src={discIcon}
              alt="point"
            />
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/">
            <img
              className="nav__link-icon"
              src={discIcon}
              alt="point"
            />
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/">
            <img
              className="nav__link-icon"
              src={discIcon}
              alt="point"
            />
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/">
            <img
              className="nav__link-icon"
              src={discIcon}
              alt="point"
            />
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/">
            <img
              className="nav__link-icon"
              src={discIcon}
              alt="point"
            />
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="/">
            <img
              className="nav__link-icon"
              src={discIcon}
              alt="point"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};
