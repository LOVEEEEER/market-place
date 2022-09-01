import React, { useState } from "react";
import "./Header.css";
import logo from "../../../assets/images/logo.svg";
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";
import DefaultMenu from "../../ui/DefaultMenu/DefaultMenu";
// import Button from "@mui/material/Button";

const Header = ({ ...rest }) => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };
  const handleExit = () => {
    setMenu(false);
  };
  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__nav-buttons_wrapper">
          <i className="bi bi-list" onClick={handleMenu}></i>
          <Link to="/">
            <img className="logo" src={logo} alt="" />
          </Link>
        </div>
        {/* <div className="header__auth-buttons_wrapper">
          <Button variant="outlined" className="header__auth-button">
            Войти
          </Button>
          <Button variant="contained" className="header__auth-button">
            Регистрация
          </Button>
        </div> */}
        <Link to="/basket">
          <i className="bi bi-basket"></i>
        </Link>
        <Menu status={menu} onExit={handleExit}>
          <DefaultMenu {...rest} />
        </Menu>
      </div>
    </header>
  );
};

export default Header;
