import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DefaultMenu = () => {
  return (
    <div className="header__menu-container menu-container">
      <div className="header__name-block menu-name-block">
        <h2 className="header__menu-name menu-name">Меню</h2>
      </div>

      <div className="header__head-menu">
        <h3>Вверхнее меню</h3>
        <ul className="header__head-menu-list">
          <li className="header__head-menu-item">
            <Link to="/catalog" className="header__head-menu-link">
              Каталог
            </Link>
          </li>
          <li className="header__head-menu-item">
            <Link to="/about" className="header__head-menu-link">
              О компании
            </Link>
          </li>
          <li className="header__head-menu-item">
            <Link to="/contacts" className="header__head-menu-link">
              Контакты
            </Link>
          </li>
          <li className="header__head-menu-item">
            <Link to="/delivery" className="header__head-menu-link">
              Доставка
            </Link>
          </li>
          <li className="header__head-menu-item">
            <Link to="/pay" className="header__head-menu-link">
              Оплата
            </Link>
          </li>
          <li className="header__head-menu-item">
            <Link to="/cabinet" className="header__head-menu-link">
              Личный кабинет
            </Link>
          </li>
        </ul>
      </div>
      <div className="header__contacts-menu">
        <h3>Контакты</h3>
        <ul className="header__menu-soc">
          <li className="header__menu-soc-item">
            Telegram:
            <a href="#" className="header__menu-soc-link">
              @hatesLov
            </a>
          </li>
          <li className="header__menu-soc-item">
            VK:
            <a href="#" className="header__menu-soc-link">
              Никита Демьяненко
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

DefaultMenu.propTypes = {
  onChangeTheme: PropTypes.func,
  theme: PropTypes.string
};

export default DefaultMenu;
