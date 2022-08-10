import React from "react";
import { Switch } from "@mui/material";
import PropTypes from "prop-types";

const DefaultMenu = ({ theme, onChangeTheme }) => {
  const handleTheme = (status) => {
    onChangeTheme(status);
  };
  return (
    <div className="header__menu-container menu-container">
      <div className="header__name-block menu-name-block">
        <h2 className="header__menu-name menu-name">Меню</h2>
        <label htmlFor="#">Смена темы</label>
        <Switch
          checked={!(theme === "light")}
          onChange={(e, status) => handleTheme(status)}
        />
      </div>

      <div className="header__head-menu">
        <h3>Вверхнее меню</h3>
        <ul className="header__head-menu-list">
          <li className="header__head-menu-item">
            <a href="#" className="header__head-menu-link">
              Каталог
            </a>
          </li>
          <li className="header__head-menu-item">
            <a href="#" className="header__head-menu-link">
              О компании
            </a>
          </li>
          <li className="header__head-menu-item">
            <a href="#" className="header__head-menu-link">
              Контакты
            </a>
          </li>
          <li className="header__head-menu-item">
            <a href="#" className="header__head-menu-link">
              Доставка
            </a>
          </li>
          <li className="header__head-menu-item">
            <a href="#" className="header__head-menu-link">
              Оплата
            </a>
          </li>
          <li className="header__head-menu-item">
            <a href="#" className="header__head-menu-link">
              Личный кабинет
            </a>
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
