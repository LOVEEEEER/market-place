import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../css/Header.css";
import logo from "../assets/images/logo.svg";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import DefaultMenu from "./DefaultMenu";
import Search from "./Search";
import api from "../api";
const Header = ({ onChange, value, ...rest }) => {
  const [search, setSearch] = useState(false);
  const [menu, setMenu] = useState(false);
  const [items, setItems] = useState();
  useEffect(() => {
    api.clothes.fetchAll().then((data) => setItems(data));
  }, []);
  const handleSearch = () => {
    setSearch(!search);
  };
  const handleMenu = () => {
    setMenu(!menu);
  };
  const handleExit = () => {
    setMenu(false);
  };
  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__control-wrap">
          <i className="bi bi-list" onClick={handleMenu}></i>
          <Link to="/products">
            <img className="logo" src={logo} alt="" />
          </Link>
        </div>

        {items && (
          <Search
            items={items}
            value={value}
            onChange={onChange}
            search={search}
            onToggleSearch={handleSearch}
          />
        )}

        <Menu status={menu} onExit={handleExit}>
          <DefaultMenu {...rest} />
        </Menu>
      </div>
    </header>
  );
};

Header.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired
};

export default Header;
